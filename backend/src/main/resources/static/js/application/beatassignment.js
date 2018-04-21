var beatUrlPrefix = "/trip";
var beatURL = {
    loadCustomers: beatUrlPrefix + "/list",
    loadUsers: "/user/list",
    loadVehicle: "/vehicle/list",
    assign: beatUrlPrefix + "/create",
    modify: beatUrlPrefix + "/modify",
    customerDetails: beatUrlPrefix + "/customers"
};


var areaLoaded = true;
var currentAction = null;
var selectedBeats = new HashMap();
var beatCustomersTableInst = null;
var clickedTrip = null;
var currentSelectedId = null;

$(document).ready(function () {

    loadTripDetails();
    var areas = new Array();
    areas.push("#area");
    areas.push("#beats");

    $.post(commonUrl.findBeat, function (data) {
        loadSelectOptions("#area",data.result,true);
        loadSelectOptions("#beats",data.result,true);
    });

    //loadAreas(areaTypes.ALL_AREA, $(this).val(), areas);

    loadSelectOptionsForDrivers("#drivers");

    loadSelectOptionsForVehicle("#vehicles");

    setTimeout(function () {
        $("#area").multipleSelect({
            filter: true,
            multiple: true
        });
    }, 700);

    $("#show-assign-beats").click(function () {
        $("#beats-details-div").hide();
        $("#add-modify-div").show();
        $("#assign-beat").show();
        $("#modify-assigned-beat").hide();
        currentAction=1;
    });

    $("#show-modify-beats").click(function () {
        $("#beats-details-div").hide();
        $("#add-modify-div").show();
        $("#assign-beat").hide();
        $("#modify-assigned-beat").show();
        populateFields();
        currentAction=2;
    });

    $("#cancel").click(function () {
        $("#beats-details-div").show();
        $("#add-modify-div").hide();
        currentAction = 0;
    });

    $("#search").click(function(){
        if(null!=dataTableInst){
            dataTableInst.destroy();
        }
        loadTripDetails();
    });
});

function populateFields() {
    var fullData = selectedBeats.get(currentSelectedId);
    $("#beats").val(fullData.beatDetails.id);
    $("#drivers").val(fullData.driverDetails.id);
    $("#vehicles").val(fullData.vehicleDetails.id);
    $("#helpername").val(fullData.helperName);
    $("#helpernumber").val(fullData.helperNumber);
}

function loadAreas(typeId, id, $elements) {
    if (areaLoaded == false) {
        return;
    }

    areaLoaded = false;

    /*loading all states*/
    $.post(commonUrl.findArea, {"typeId": typeId, "id": id}, function (data) {
        for (var i = 0; i < $elements.length; i++) {
            loadSelectOptions($elements[i], data.result, true);
        }
        areaLoaded = true;
    });

}

function loadSelectOptionsForDrivers($Id) {
    /*loading all drivers*/
    $.get(beatURL.loadUsers, {}, function (data) {
        $($Id).empty();
        $.each(data.result, function (index, value) {
            $('<option>').val(value.driverDetails.id).text(value.driverDetails.name + "(" + value.driverDetails.mobileNumber + ")").appendTo($Id);
        });
    });

}

function loadSelectOptionsForVehicle($Id) {
    /*loading all drivers*/
    $.get(beatURL.loadVehicle, {}, function (data) {
        $($Id).empty();
        $.each(data.result, function (index, value) {
            $('<option>').val(value.id).text(value.vehicleNumber + "(" + value.vehicleModelNumber + ")").appendTo($Id);
        });
    });
}



function setSelectedId(id) {
    currentSelectedId = id;
}


function loadTripDetails() {

    /* view customers */
    dataTableInst = $('#beat-details').DataTable({
        "bServerSide": true,
        "sAjaxSource": beatURL.loadCustomers + "?beatIds=" + $("#area").multipleSelect("getSelects").toString(),
        "bProcessing": true,
        "bPaginate": true,
        "sServerMethod": "GET",
        "sAjaxDataProp": "result",
        "sPaginationType": "full_numbers",
        "bLengthChange": true,
        "bFilter": false,
        "bSort": true,
        "bInfo": false,
        "bAutoWidth": true,
        "bDeferRender": true,
        "iDisplayLength": 5,
        "aLengthMenu": [5, 10, 25, 50, 100],
        "bScrollCollapse": true,
        "aoColumns": [
            {"mData": "id", 'sWidth': '2%', "bSortable": false},
            {"mData": "beatDetails.name", 'sWidth': '15%', "bSortable": false},
            {'mData': "driverDetails.name", 'sWidth': '14%'},
            {'mData': "driverDetails.mobileNumber", 'sWidth': '12%'},
            {'mData': "helperName", 'sWidth': '12%'},
            {'mData': "helperNumber", 'sWidth': '12%'},
            {'mData': "vehicleDetails.vehicleNumber", 'sWidth': '14%'},
            {'mData': "isCompleted", 'sWidth': '14%'}
        ],
        "aoColumnDefs": [
            {
                sType: "numeric",
                mData: "RowNumber",
                aTargets: [0],
                mRender: function (data, type, full) {
                    selectedBeats.set(data, full);
                    return "<center><input type='radio' onclick=setSelectedId(" + data + ") name='id' value='" + data + "' class='borderNone' ></input></center>";
                }
            },
            {
                mData: "RowNumber",
                aTargets: [1],
                mRender: function (data, type, full) {
                    return "<center><a href='#' class='trip_details' val='" + full.id + "'> " + data + "(" + full.name + ")</a></center>";
                }
            },
            {
                mData: "RowNumber",
                aTargets: [6],
                mRender: function (data, type, full) {
                    return "<center>" + data + "(" + full.vehicleDetails.vehicleModelNumber + ")</center>";
                }
            },
            {
                aTargets: [7],
                mRender: function (data, type, full) {
                    var data1 = "Yes";
                    if (!full.completed) {
                        data1 = "No";
                    }
                    return "<center>" + data1 + "</center>";
                }
            }
        ],
        "initComplete": function (settings, json) {
            $(".trip_details").click(function () {
                clickedTrip = parseInt($(this).attr("val"));
                loadDialogBox();
            });
        },
        "fnDrawCallback": function () {
            $(".trip_details").click(function () {
                clickedTrip = parseInt($(this).attr("val"));
                loadDialogBox();
            });
        }
    });
}

function reloadDataTable() {
    dataTableInst.ajax.reload();
}

function reloadCustomerDetails() {
    beatCustomersTableInst.ajax.reload();
}


$(document).ready(function () {
    $("#beat-assignment-form").validate({
        submitHandler: function (form) {
            if(currentAction == 1){
                $("#assign-beat").prop("disabled",true);
                assignBeat();
                return;
            }

            if(currentAction == 2){
                $("#assign-beat").prop("disabled",true);
                updateBeat();
                return;
            }
        },
        rules: {
            area: {
                valueNotEquals: "-1"
            },
            drivers: {
                valueNotEquals: "-1"
            },
            vehicles: {
                valueNotEquals: "-1"
            },
            helpername: {
                required: true
            },
            normalbottle: {
                required: true,
                digits: true
            },
            chilledbottle: {
                required: true,
                digits: true
            },
            helpernumber: {
                required: true,
                minlength: 10,
                maxlength: 12,
                digits: true
            }
        },
        messages: {
            area: {
                valueNotEquals: "Select Beat"
            },
            drivers: {
                valueNotEquals: "Select Driver"
            },
            vehicles: {
                valueNotEquals: "Select Vehicle"
            },
            normalbottle: {
                required: "Enter Normal Bottles",
                digits: "Enter valid bottle count"
            },
            chilledbottle: {
                required: "Enter Chilled Bottles",
                digits: "Enter valid bottle count"
            },
            helpername: {
                required: "Enter Helper Name"
            },
            helpernumber: {
                required: "Enter Mobile number",
                minlength: "Enter valid Mobile number",
                maxlength: "Enter valid Mobile number",
                digits: "Enter valid Mobile number"
            }
        }
    });

});


function assignBeat() {
    var ary = new Array();
    var beats = $("#beats").val().split(",");
    for (var i = 0; i < beats.length; i++) {
        ary.push(beats[i]);
    }
    var data = {
        "beatIds": beats, "driverId": $("#drivers").val(), "vehicleId": $("#vehicles").val(),
        "helperName": $("#helpername").val(), "helperNumber": $("#helpernumber").val(),
        "normalBottle" : $("#normal-bottles").val(), "chilledBottle" : $("#chilled-bottles").val()
    };
    $.ajax({
        type: "POST",
        url: beatURL.assign,
        data: JSON.stringify(data),
        dataType: 'json',
        success: function (data) {
            console.log(data);
            $("#assign-beat").prop("disabled",false);
            if (data.code == 200) {
                reloadDataTable();
                $("#cancel").click();
            } else {
                $("#beats").after('<label id="beats-error" class="error" for="beats">Beat is already assigned for today</label>')
            }
        },
        contentType: "application/json"
    });
}

function updateBeat() {
    var ary = new Array();
    var beats = $("#beats").val().split(",");
    for (var i = 0; i < beats.length; i++) {
        ary.push(beats[i]);
    }
    var data = {
        "tripId": currentSelectedId,
        "beatIds": beats, "driverId": $("#drivers").val(), "vehicleId": $("#vehicles").val(),
        "helperName": $("#helpername").val(), "helperNumber": $("#helpernumber").val()
    };
    $.ajax({
        type: "POST",
        url: beatURL.modify,
        data: JSON.stringify(data),
        dataType: 'json',
        success: function (data) {
            $("#assign-beat").prop("disabled",false);
            console.log(data);
            if (data.code == 200) {
                reloadDataTable();
                $("#cancel").click();
            } else {
                $("#beats").after('<label id="beats-error" class="error" for="beats">Beat is already assigned for today</label>')
            }
        },
        contentType: "application/json"
    });
}

function loadBeatCustomerDetails() {
    beatCustomersTableInst = $('#customer-details').DataTable({
        "bServerSide": true,
        "sAjaxSource": beatURL.customerDetails + "?tripId=" + clickedTrip,
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
            {"mData": "customerDetail", 'sWidth': '4%', "bSortable": false},
            {"mData": "orderedBottles", 'sWidth': '4%', "bSortable": false},
            {'mData': "placedBottles", 'sWidth': '4%'},
            {'mData': "emptyBottles", 'sWidth': '4%'},
            {'mData': "amount", 'sWidth': '4%'},
            {'mData': "amountReceived", 'sWidth': '4%'},
            {'mData': "comments", 'sWidth': '14%'},
            {'mData': "paymentMode", 'sWidth': '4%'},
            {'mData': "customerDetail.price", 'sWidth': '44%'},
            {'mData': "isCompleted", 'sWidth': '4%'},
            {'mData': "customerDetail.emptyBottlesRemained", 'sWidth': '4%'},
            {'mData': "customerDetail.balanceAmount", 'sWidth': '4%'},
        ],
        "aoColumnDefs": [
            {
                mData: "RowNumber",
                aTargets: [0],
                mRender: function (data, type, full) {
                    return "<center>" + data.firstName + " " + data.lastName + "</center>";
                }
            }, {
                mData: "RowNumber",
                aTargets: [9],
                mRender: function (data, type, full) {
                    var data1 = "Yes";
                    if (!data) {
                        data1 = "No";
                    }
                    return "<center>" + data1 + "</center>";
                }
            }
        ],
        "fnDrawCallback": function (data) {
            $("#total_customers").html("Total Customers :"+data.fnRecordsTotal());
        }
    });
}


function loadDialogBox(){
    if (null != beatCustomersTableInst) {
        beatCustomersTableInst.destroy();
    }
    loadBeatCustomerDetails();
    var title = "";
    var beatDetail = selectedBeats.get(28);
    if(beatDetail != undefined &&  beatDetail != null ){
        title = beatDetail.beatDetails.name;
    }
    $("#dialog").dialog({
        title:title,
        draggable: true,
        minWidth : 700,
        minHeight : 500,
        modal: true
    });
}