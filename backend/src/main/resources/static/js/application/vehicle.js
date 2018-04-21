var vehicleUrlPrefix = "/vehicle";
var vehicleURL = {
    addVehicle : vehicleUrlPrefix+"/add",
    modifyVehicle : vehicleUrlPrefix+"/modify",
    deleteVehicle : vehicleUrlPrefix+"/delete",
    allVehicle : vehicleUrlPrefix+"/list"
};
var dateSplitter = "-";
var vehicleDetailsMap = new HashMap();
var currentSelectedId =null;
var currentAction=0;
$(document).ready(function(){

    $("#pollution-date").datepicker({dateFormat: "dd-mm-yy"});
    $("#fitness-date").datepicker({dateFormat: "dd-mm-yy"});
    $("#insurance-date").datepicker({dateFormat: "dd-mm-yy"});
    $("#purchase-date").datepicker({dateFormat: "dd-mm-yy"});

    loadVehicleDetails();


    $("#show-add-vehicle").click(function(){
        $("#vehicle-details-div").hide();
        $("#add-modify-div").show();
        $("#add-vehicle").show();
        $("#modify-vehicle").hide();
        currentAction = 1;
    });

    $("#show-modify-vehicle").click(function(){
        $("#vehicle-details-div").hide();
        $("#add-modify-div").show();
        $("#add-vehicle").hide();
        $("#modify-vehicle").show();
        populateModifyForm(currentSelectedId);
        currentAction = 2;
    });

    $("#cancel").click(function(){
        currentAction = 0;
        $("#vehicle-details-div").show();
        $("#add-modify-div").hide();
    });

    $("#delete").click(function(){
        var data = vehicleDetailsMap.get(currentSelectedId);
        var r = confirm("Do you really want to delete vehicle number "+data.vehicleNumber);
        if (r == true) {
            $.post(vehicleURL.deleteVehicle,{"id":currentSelectedId} ,function(data){
                if (data.code == 200) {
                    dataTableInst.ajax.reload();
                }else{
                    alert("Sorry something went wrong");
                }
            });
        }
    });


});


function populateModifyForm(id){
    var data = vehicleDetailsMap.get(id);
    $("#fName").val(data.firstName);
    $("#lName").val(data.lastName);
    $("#vehicleNo").val(data.vehicleNumber);
    $("#mobileNoP").val(data.primaryContactNumber);
    $("#mobileNoS").val(data.secondaryContactNumber);
    $("#email").val(data.emailId);
    $("#address").val(data.addressNearPS);

}

function setSelectedId(id){
    currentSelectedId = id;
}

function loadVehicleDetails(){
    /* view customers */
    dataTableInst= $('#vehicle-details').DataTable({
        "bServerSide"    : true,
        "sAjaxSource"    : vehicleURL.allVehicle,
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
            {"mData": "firstName", 'sWidth': '15%', "bSortable":false},
            {'mData': "vehicleNumber", 'sWidth': '14%'},
            {'mData': "primaryContactNumber", 'sWidth': '12%'},
            {'mData': "secondaryContactNumber", 'sWidth': '14%'},
            {'mData': "emailId", 'sWidth': '14%'},
            {'mData': "addressNearPS", 'sWidth': '14%'}/*,
            {'mData': "addressNearPS", 'sWidth': '14%'}*/
        ],
        "aoColumnDefs": [
            {
                mData: "RowNumber",
                aTargets: [0],
                mRender: function (data, type, full) {
                    vehicleDetailsMap.set(data,full);
                    var html = "<center><input type='radio' name='id' onclick=setSelectedId(" + data+ ") value='" + data+ "' class='borderNone' ></input></center>";
                    return html;
                }
            },
            {
                mData: "RowNumber",
                aTargets: [1],
                mRender: function (data, type, full) {
                    vehicleDetailsMap.set(data,full);
                    var name = full.firstName +" "+ full.lastName;
                    var html = "<center>"+name+"</center>";
                    return html;
                }
            }/*,
            {
                mData: "RowNumber",
                aTargets: [7],
                mRender: function (data, type, full) {
                    var html ="<center><button>Disable</button>"
                }
            }*/
        ]
    });
}

function addVehicle(){

    if(currentAction == 0)
        return;
    var data ={
        "username" : $("#mobileNoP").val(),
        "role" : {
            "roleId" : 2
        },
        "vehicleNumber" : $("#vehicleNo").val(),
        "secondaryContactNumber" : $("#mobileNoS").val(),
        "primaryContactNumber" : $("#mobileNoP").val(),
        "emailId" : $("#email").val(),
        "addressNearPS" : $("#address").val(),
        "firstName" : $("#fName").val(),
        "lastName" : $("#lName").val()
    };

    $.ajax({
        type: "POST",
        url: vehicleURL.addVehicle,
        data: JSON.stringify(data),
        dataType : 'json',
        success: function (data){
            console.log(data);
            if(data.code== 200){
                window.location.reload();
            }
        },
        contentType: "application/json"
    });
}

function modifyVehicle(){

    if(currentAction == 0)
        return;

    var polldate = $("#pollution-date").val().split(dateSplitter);
    var pdate = $("#purchase-date").val().split(dateSplitter);
    var fdate = $("#fitness-date").val().split(dateSplitter);
    var idate = $("#insurance-date").val().split(dateSplitter);
    var data ={
        "id" : currentSelectedId,
        "username" : $("#mobileNoP").val(),
        "role" : {
            "roleId" : 1
        },
        "vehicleNumber" : $("#vehicleNo").val(),
        "secondaryContactNumber" : $("#mobileNoS").val(),
        "primaryContactNumber" : $("#mobileNoP").val(),
        "emailId" : $("#email").val(),
        "addressNearPS" : $("#address").val(),
        "firstName" : $("#fName").val(),
        "lastName" : $("#lName").val()
    };

    $.ajax({
        type: "POST",
        url: vehicleURL.modifyVehicle,
        data: JSON.stringify(data),
        dataType : 'json',
        success: function (data){
            console.log(data);
            if(data.code== 200){
                window.location.reload();
            }else{
                alert(data.message);
            }
        },
        contentType: "application/json"
    });

}

$(document).ready(function(){
    $("#vehicle-form").validate({
        submitHandler: function(form) {
            if(currentAction == 0){
                return;
            }
            if(currentAction==1)
                addVehicle();
            if(currentAction ==2 ){
                modifyVehicle();
            }

            return;
        },
        rules: {
            fName: {
                required: true
            },
            lName: {
                required: true
            },
            mobileNoP: {
                required: true,
                minlength: 10,
                maxlength : 12,
                digits: true
            },
            mobileNoS: {
                required: false,
                minlength: 10,
                maxlength : 12,
                digits: true

            },
            emailId: {
                required: true,
                email: true
            },
            address: {
                required: true,
                minlength : 10,
                maxlength : 350
            },
            vehicleNo: {
                required: true/*,
                regex : "^[a-zA-Z0-9 ]*$"*/
            }
        },
        messages: {
            fName: {
                required: "Enter First Name"
            },
            lName: {
                required: "Enter Last Name"
            },
            mobileNoP: {
                required: "Enter Primary Mobile number",
                minlength: "Enter valid Primary Mobile number",
                maxlength : "Enter valid Primary Mobile number",
                digits: "Enter valid Primary Mobile number"
            },
            mobileNoS: {
                minlength: "Enter valid Secondary Mobile number",
                maxlength : "Enter valid Secondary Mobile number",
                digits: "Enter valid Secondary Mobile number"
            },
            emailId: {
                email: "Enter valid email id"
            },
            address: {
                required: "Enter Your Address",
                minlength : "Minimun 10 Character",
                maxlength : "Maximum 350 Character"
            },
            vehicleNo: {
                required: "Enter Vehicle Number"/*,
                regex : "Enter valid Vehicle Number"*/
            }
        }
    });

});

