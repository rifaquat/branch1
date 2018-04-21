var driverUrlPrefix = "/user";
var imagePath = "D:\\Applications\\";
var driverURL = {
    adddriver: driverUrlPrefix + "/add",
    modifydriver: driverUrlPrefix + "/modify",
    deletedriver: driverUrlPrefix + "/delete",
    alldriver: driverUrlPrefix + "/list"
};
var driverDetailsMap = new HashMap();
var currentSelectedId = null;

$(document).ready(function () {


    loadDriverDetails();

    $("#show-add-driver").click(function () {
        $("#driver-details-div").hide();
        $("#add-modify-div").show();
        $("#add-driver").show();
        $("#modify-driver").hide();
        $("#username").removeAttr("readonly");
        currentAction = 1;
    });

    $("#show-modify-driver").click(function () {
        $("#driver-details-div").hide();
        $("#add-modify-div").show();
        $("#add-driver").hide();
        $("#modify-driver").show();
        populateModifyForm(currentSelectedId);
        currentAction = 2;
    });

    $("#cancel").click(function () {
        currentAction = 0;
        $("#driver-details-div").show();
        $("#add-modify-div").hide();
    });

    $("#delete").click(function(){
        var data = driverDetailsMap.get(currentSelectedId);
        var r = confirm("Do you really want to delete driver of username "+data.username);
        if (r == true) {
            $.post(driverURL.deletedriver,{"id":currentSelectedId} ,function(data){
                if(data.code == 200){
                    dataTableInst.ajax.reload();
                }else{
                    alert("Something went wrong!");
                }
            });
        }
    });
});


function populateModifyForm(id) {
    var data = driverDetailsMap.get(id);
    $("#name").val(data.driverDetails.name);
    $("#licence").val(data.driverDetails.license);
    $("#username").val(data.username);
    $("#username").attr("readonly","readonly");
    $("#mobileNumber").val(data.driverDetails.mobileNumber);
    $("#email").val(data.driverDetails.email);
    $("#address").val(data.driverDetails.address);
    $("#userId").val(id);

}

function setSelectedId(id) {
    currentSelectedId = id;
}

function loadDriverDetails() {

    /* view drivers */
    dataTableInst = $('#driver-details').DataTable({
        "bServerSide": true,
        "sAjaxSource": driverURL.alldriver,
        "bProcessing": true,
        "bPaginate": true,
        "sServerMethod": "GET",
        "sAjaxDataProp": "result",
        "sPaginationType": "full_numbers",
        "bLengthChange": true,
        "bFilter": true,
        "bSort": true,
        "bInfo": false,
        "bAutoWidth": true,
        "bDeferRender": true,
        "iDisplayLength": 5,
        "aLengthMenu": [5, 10, 25, 50, 100],
        "bScrollCollapse": true,
        "aoColumns": [
            {"mData": "id", 'sWidth': '2%', "bSortable": false},
            {"mData": "driverDetails.name", 'sWidth': '15%', "bSortable": false},
            {'mData': "username", 'sWidth': '14%'},
            {"mData": "driverDetails.license", 'sWidth': '15%', "bSortable": false},
            {'mData': "driverDetails.licensePhotoId", 'sWidth': '12%'},
            {'mData': "driverDetails.mobileNumber", 'sWidth': '14%'}
        ],
        "aoColumnDefs": [
            {
                mData: "RowNumber",
                aTargets: [0],
                mRender: function (data, type, full) {
                    driverDetailsMap.set(data, full);
                    var html = "<center><input type='radio' onclick=setSelectedId(" + data + ") name='id' value='" + data + "' class='borderNone' ></input></center>";
                    return html;
                }
            },
            {
                mData: "RowNumber",
                aTargets: [4],
                mRender: function (data, type, full) {
                    return '<center><img src="'+imagePath+data+'" width="50px" height="50px" alt="image">';
                }
            }
        ]
    });
}

function addDriver() {

    if (currentAction == 0)
        return;

    var formData = new FormData($("#driver-form")[0]);
    $.ajax({
        url: driverURL.adddriver, // Url to which the request is send
        type: "POST",             // Type of request to be send, called as method
        data: formData, // Data sent to server, a set of key/value pairs (i.e. form fields and values)
        contentType: false,       // The content type used when sending data to the server.
        cache: false,             // To unable request pages to be cached
        processData: false,        // To send DOMDocument or non processed data file it is set to false
        success: function (data)   // A function to be called if request succeeds
        {
            if(data.code == 200){
                alert("Generated Password for Driver is "+data.result);
                dataTableInst.ajax.reload();
                $("#cancel").click();
            }else{
                alert("Something went wrong!");
            }
        }
    });
}

function modifyDriver() {

    if (currentAction == 0)
        return;

    var formData = new FormData($("#driver-form")[0]);
    $.ajax({
        url: driverURL.modifydriver, // Url to which the request is send
        type: "POST",             // Type of request to be send, called as method
        data: formData, // Data sent to server, a set of key/value pairs (i.e. form fields and values)
        contentType: false,       // The content type used when sending data to the server.
        cache: false,             // To unable request pages to be cached
        processData: false,        // To send DOMDocument or non processed data file it is set to false
        success: function (data)   // A function to be called if request succeeds
        {
            if(data.code == 200){
                dataTableInst.ajax.reload();
                $("#cancel").click();
            }else{
                alert("Something went wrong!");
            }
        }
    });

}

$(document).ready(function () {
    $("#driver-form").validate({
        submitHandler: function (form) {
            if (currentAction == 0) {
                return;
            }
            if (currentAction == 1)
                addDriver();
            if (currentAction == 2) {
                modifyDriver();
            }

            return;
        },
        rules: {
            "driverDetails.name": {
                required: true
            },
            "driverDetails.license": {
                required: true
            },
            username: {
                required: true
            },
            licenceId: {
                required: false
            },
            "driverDetails.mobileNumber": {
                required: true,
                digits: true,
                minlength: 10,
                maxlength: 12
            },
            "driverDetails.email": {
                required: false,
                email: true
            },
            "driverDetails.address": {
                required: true,
                minlength: 10,
                maxlength: 250
            }

        },
        messages: {
            "driverDetails.name": {
                required: "Enter Name"
            },
            "driverDetails.license": {
                required: "Enter licence"
            },
            username: {
                required: "Enter user name"
            },
            "driverDetails.mobileNumber": {
                required: "Enter Mobile number",
                minlength: "Enter valid Mobile number",
                maxlength: "Enter valid Mobile number",
                digits: "Enter valid Mobile number"
            },
            "driverDetails.email": {
                email: "Enter valid email id"
            },
            "driverDetails.address": {
                required: "Enter Address",
                minlength: "Enter minimum 10 characters",
                maxlength: "Max 250 characters allowed"
            }
        }
    });
});

