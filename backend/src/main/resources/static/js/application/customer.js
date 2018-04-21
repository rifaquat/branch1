var custUrlPrefix = "/customer";
var customerURL = {
    addCustomer : custUrlPrefix+"/add",
    modifyCustomer : custUrlPrefix+"/modify",
    deleteCustomer : custUrlPrefix+"/delete",
    allCustomer : custUrlPrefix+"/list",
    customerStatus : custUrlPrefix+"/changestatus"
};

var currentAction = null;
var customerDetailsMap = new HashMap();
var currentSelectedId =null;
var isFormSubmitted =true;

$(document).ready(function(){

    loadCustomerDetails();

    $("#show-add-customer").click(function(){
        $("#customer-details-div").hide();
        $("#add-modify-div").show();
        $("#add-customer").show();
        $("#modify-customer").hide();
        currentAction = 1;
    });

    $("#show-modify-customer").click(function(){
        $("#customer-details-div").hide();
        $("#add-modify-div").show();
        $("#add-customer").hide();
        $("#modify-customer").show();
        populateModifyForm(currentSelectedId);
        currentAction = 2;
    });

    $("#cancel").click(function(){
        currentAction = 0;
        $("#customer-details-div").show();
        $("#add-modify-div").hide();

    });

    $("#delete").click(function(){
        var data = customerDetailsMap.get(currentSelectedId);
        var r = confirm("Do you really want to delete customer name "+data.firstName+"( "+data.mobileNo+")");
        if (r == true) {
            $.post(customerURL.deleteCustomer,{"id":currentSelectedId} ,function(data){
                if(data == 200){
                    dataTableInst.ajax.reload();
                }else{
                    alert("Sorry something went wrong");
                }
            });
        }
    });


    $.post(commonUrl.findJarType, function (data) {
        loadSelectOptions("#jartype",data.result,true);
    });

    $.post(commonUrl.findBeat, function (data) {
        loadSelectOptions("#beat",data.result,true);
    });

    /* default states of current country IND*/
    loadAreas(areaTypes.STATE,defaultCountry,"#state");


    $("#state").change(function(){
        loadAreas(areaTypes.CITY,$(this).val(),"#city" );
    });


    $("#city").change(function(){
        loadAreas( areaTypes.AREA,$(this).val(),"#area");
    });

    setTimeout(function(){
        $("#state").val(15);
        //By default loading Jabalpur
        loadAreas( areaTypes.CITY,15,"#city");
    },1000);

});
var areaLoaded=true;

function loadAreas(typeId,id,$element){
    if(areaLoaded == false){
        return;
    }

    areaLoaded = false;

    /*loading all states*/
    $.post(commonUrl.findArea,{"typeId" : typeId , "id" : id }, function (data) {
        loadSelectOptions($element,data.result,true);
        areaLoaded = true;
    });

}

function loadSelectOptions($Id,data,clearAll){
    if(clearAll){
        $($Id).empty();
        $('<option>').val("-1").text("Select").appendTo($Id);
    }

    $.each(data, function( index, value ) {
        $('<option>').val(value.id).text(value.name).appendTo($Id);
    });
}


function populateModifyForm(id){
    var data = customerDetailsMap.get(id);
    $("#first-name").val(data.firstName);
    $("#last-name").val(data.lastName);
    $("#manager").val(data.managerName);
    $("#landline").val(data.landLineNumber);
    $("#email").val(data.emailId);
    $("#mobileNo").val(data.mobileNo);
    $("#state").val(data.stateDetails.id);
    $("#beat").val(data.beatDetails.id);
    $("#whatsapp").val(data.whatsAppNumber);

    loadAreas(areaTypes.CITY,$("#state").val(),"#city" );

    setTimeout(function(){
        $("#city").val(data.cityDetails.id);

        loadAreas( areaTypes.AREA,$("#city").val(),"#area");

        setTimeout(function(){
            $("#area").val(data.areaNameDetails.id);
        },500);

    },500);

    $("#rate").val(data.price);
    $("#pincode").val(data.pincode);
    $("#noOfBottles").val(data.noOfBottles);
    $("#address").val(data.address);
    $("#deposit").val(data.securityDeposit);
    $("#jartype").val(data.jarType.id);
}

function setSelectedId(id){
    currentSelectedId = id;
}

function loadCustomerDetails(){
    /* view customers */
    dataTableInst = $('#customer-details').DataTable({
        "bServerSide"    : true,
        "sAjaxSource"    : customerURL.allCustomer,
        "bProcessing"    : true,
        "bPaginate"      : true,
        "sServerMethod"  : "GET",
        "sAjaxDataProp"  : "result",
        "sPaginationType": "full_numbers",
        "bLengthChange"  : true,
        "bFilter"        : true,
        "bSort"          : true,
        "bInfo"          : false,
        "bAutoWidth"     : true,
        "bDeferRender"   : true,
        "iDisplayLength": 5,
        "aLengthMenu": [5,10, 25, 50, 100],
        "bScrollCollapse": true,
        "aoColumns"      : [
            {"mData": "id", 'sWidth': '2%', "bSortable": false },
            {"mData": "customerId", 'sWidth': '2%', "bSortable": false },
            {"mData": "firstName", 'sWidth': '15%', "bSortable":false},
            {'mData': "areaNameDetails", 'sWidth': '14%'},
            {'mData': "beatDetails.name", 'sWidth': '14%'},
            {'mData': "mobileNo", 'sWidth': '12%'},
            {'mData': "isEnabled", 'sWidth': '14%'}
        ],
        "aoColumnDefs": [
            {
                sType: "numeric",
                mData: "RowNumber",
                aTargets: [0],
                mRender: function (data, type, full) {
                    customerDetailsMap.set(data,full);
                    var html = "<center><input type='radio' name='id' onclick=setSelectedId(" + data+ ") value='" + data+ "' class='borderNone' ></input></center>";
                    return html;
                }
            },
            {
                mData: "RowNumber",
                aTargets: [2],
                mRender: function (data, type, full) {
                    var html = "<center>"+full.firstName+" "+full.lastName+"</center>";
                    return html;
                }
            },
            {
                mData: "RowNumber",
                aTargets: [3],
                mRender: function (data, type, full) {
                    var html = "<center>"+full.areaNameDetails.name+"</center>";
                    return html;
                }
            },
            {
                mData: "RowNumber",
                aTargets: [6],
                mRender: function (data, type, full) {
                    if(full.isEnabled){
                        return "<center><a href='#' class='btn btn-primary status' val="+full.id+" action ='2' >Disable</a></center>";
                    }else{
                        return "<center><a href='#' class='btn btn-primary status' val="+full.id+" action ='1' >Enable</a></center>";
                    }
                }
            }
        ],
        "initComplete": function(settings, json) {
            $(".status").click(function(){
                changesStatus(parseInt($(this).attr("val")),parseInt($(this).attr("action")));
            });
        },
        "fnDrawCallback" :function(){
            $(".status").click(function(){
                changesStatus(parseInt($(this).attr("val")),parseInt($(this).attr("action")));
            });
        }
    });
}

function reloadDataTable(){
    dataTableInst.ajax.reload();
}

$(document).ready(function(){
    $("#customer-form").validate({
        submitHandler: function(form) {
            if(currentAction == 0){
                return;
            }
            if(currentAction==1)
                addCustomer();
            if(currentAction ==2 ){
                modifyCustomer();
            }
            return;
        },
        rules: {
            firstName: {
                required: true
            },
            lastName: {
                required: false
            },
            manager: {
                required: false
            },
            whatsapp: {
                required: false,
                minlength: 10,
                maxlength : 12,
                digits: true
            },
            mobileNo: {
                required: true,
                minlength: 10,
                maxlength : 12,
                digits: true
            },
            landline: {
                required: false,
                minlength: 10,
                maxlength : 12,
                digits: true
            },
            emailId: {
                required: false,
                email: true
            },
            state: {
                valueNotEquals: "-1"
            },
            city: {
                valueNotEquals: "-1"
            },
            area: {
                valueNotEquals: "-1"
            },
            pincode: {
                required: true,
                minlength: 6,
                maxlength : 6,
                digits: true
            },
            address: {
                required: false,
                /*minlength: 0,*/
                maxlength : 200
            },
            noOfBottles: {
                required: true,
                min: 0,
                digits: true
            },
            rate: {
                required: true
            },
            beat: {
                valueNotEquals: "-1"
            },
            deposit: {
                required: true
            },
            jartype: {
                valueNotEquals: "-1"
            }
        },
        messages: {
            firstName: {
                required: "Enter First name"
            },
            lastName: {
                required: "Enter Last name"
            },
            manager: {
                required: "Enter Manager Name"
            },
            whatsapp: {
                required: "Enter Whatsapp number",
                minlength: "Enter valid Whatsapp number",
                maxlength : "Enter valid Whatsapp number",
                digits: "Enter valid Whatsapp number"
            },
            mobileNo: {
                required: "Enter Mobile number",
                minlength: "Enter valid Mobile number",
                maxlength : "Enter valid Mobile number",
                digits: "Enter valid Mobile number"
            },
            landline: {
                required: "Enter LandLine number",
                minlength: "Enter LandLine number",
                maxlength : "Enter LandLine number",
                digits: "Enter LandLine number"
            },
            emailId: {
                required: "Select Email id",
                email: "Enter valid Email id"
            },
            state: {
                valueNotEquals: "Select state"
            },
            city: {
                valueNotEquals: "Select City"
            },
            area: {
                valueNotEquals: "Select Beat"
            },
            pincode: {
                required: "Enter Pincode",
                minlength: "Enter valid Pincode",
                maxlength : "Enter valid Pincode"
            },
            address: {
                required: "Enter Address",
                /*minlength: "Enter minimum 0 characters",*/
                maxlength: "Max 200 characters allowed"
            },
            noOfBottles: {
                required: "Enter Number of bottles customer use daily",
                min: "Minimum 0 bottle",
                digits : "Should be in numbers"
            },
            rate: {
                required: "Enter valid rate"
            },
            beat: {
                valueNotEquals: "Select Beat"
            },
            deposit: {
                required: "Enter Deposit"
            },
            jartype: {
                valueNotEquals: "Select Jar Type"
            }
        }
    });
});


function addCustomer(){
    if(currentAction == 0)
        return;

    var data ={
        "pincode" : $("#pincode").val(),
        "firstName" : $("#first-name").val(),
        "lastName" : $("#last-name").val(),
        "managerName" : $("#manager").val(),
        "landLineNumber" : $("#landline").val(),
        "whatsAppNumber" : $("#whatsapp").val(),
        "state" : $("#state").val(),
        "city" : $("#city").val(),
        "areaName" :$("#area").val(),
        "mobileNo" :$("#mobileNo").val(),
        "emailId" :$("#email").val(),
        "address" :$("#address").val(),
        "price" : $("#rate").val(),
        "noOfBottles" : $("#noOfBottles").val(),
        "securityDeposit" : $("#deposit").val(),
        "beatId" : $("#beat").val(),
        "jarType" : {
            "id": $("#jartype").val()
        }
    };

    $.ajax({
        type: "POST",
        url: customerURL.addCustomer,
        data: JSON.stringify(data),
        dataType : 'json',
        success: function (data){
            console.log(data);
            if(data.code== 200){
                alert("Generated Password for customer is "+data.result);
                window.location.reload();
                currentAction = 0;
            }else{
                if(data.message == "Email id already exists"){
                    $("#email").after('<label id="email-error" class="error" for="email">Email id already exists</label>')
                }

                if(data.message == "Mobile number already exists"){
                    $("#mobileNo").after('<label id="mobileNo-error" class="error" for="mobileNo">Mobile number already exists</label>');
                }

            }
        },
        contentType: "application/json"
    });

}

function modifyCustomer(){

    if(currentAction == 0)
        return;
    var data ={
        "id" : currentSelectedId,
        "pincode" : $("#pincode").val(),
        "firstName" : $("#first-name").val(),
        "lastName" : $("#last-name").val(),
        "managerName" : $("#manager").val(),
        "landLineNumber" : $("#landline").val(),
        "whatsAppNumber" : $("#whatsapp").val(),
        "state" : $("#state").val(),
        "city" : $("#city").val(),
        "areaName" :$("#area").val(),
        "mobileNo" :$("#mobileNo").val(),
        "emailId" :$("#email").val(),
        "address" :$("#address").val(),
        "price" : $("#rate").val(),
        "noOfBottles" : $("#noOfBottles").val(),
        "securityDeposit" : $("#deposit").val(),
        "beatId" : $("#beat").val(),
        "jarType" : {
            "id": $("#jartype").val()
        }
    };

    $.ajax({
        type: "POST",
        url: customerURL.modifyCustomer,
        data: JSON.stringify(data),
        dataType : 'json',
        success: function (data){
            console.log(data);
            if(data.code== 200){
                alert("Generated Password is "+data.message);
                window.location.reload();
            }else{
                if(data.message == "Email id already exists"){
                    $("#email").after('<label id="email-error" class="error" for="email">Email id already exists</label>')
                }

                if(data.message == "Mobile number already exists"){
                    $("#mobileNo").after('<label id="mobileNo-error" class="error" for="mobileNo">Mobile number already exists</label>');
                }

            }
        },
        contentType: "application/json"
    });
}

function changesStatus(id,action){
    var data = {"id" : id, "action" : action};
    $.post(customerURL.customerStatus,data, function (response) {
        if(response.code == 200){
            dataTableInst.ajax.reload();
        }
    });
}