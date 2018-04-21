/**
 * Created by srifa on 04-10-2017.
 */
var dateSplitter = "-";
$(document).ready(function () {

    $("#from-date").datepicker({dateFormat: "dd-mm-yy"});
    $("#to-date").datepicker({dateFormat: "dd-mm-yy"});

    $("#search").click(function () {

        if (!validate_report_dates())
            return;


        generateReport(null);
    });

    $("#search-by-beats").click(function () {

        if (!validate_report_dates())
            return;
        var selectedBeats = $("#beats").multipleSelect("getSelects").toString();
        if(selectedBeats == ""){
            alert("Select Beats")
            return false;
        }

        generateReport(selectedBeats);
    });



});

function generateReport(beats) {
    var fromDate = $("#from-date").val().split(dateSplitter);
    var toTime = $("#to-date").val().split(dateSplitter);
    var data = {
        "fromTime": fromDate[2] + "-" + fromDate[1] + "-" + fromDate[0],
        "toTime": toTime[2] + "-" + toTime[1] + "-" + toTime[0], "beats": beats
    };
    if(beats == null )
        window.open("reports/download.csv?fromTime=" + data.fromTime + "&toTime=" + data.toTime, '_blank');
    else
        window.open("reports/download.csv?fromTime=" + data.fromTime + "&toTime=" + data.toTime+"&beats="+data.beats, '_blank');

}

function createChart(result) {
    var data = [];
    for (var i = 0; i < 3; i++) {
        var points = null;
        var name = null;
        switch (i) {
            case 0:
                points = emptyBottles(result);
                name = "Empty";
                break;
            case 1:
                points = placedBottles(result);
                name = "Places";
                break;
            case 2:
                points = orderedBottles(result);
                name = "Ordered";
                break;

        }

        var columns = {
            type: "column",
            name: name,
            showInLegend: true,
            yValueFormatString: "####",
            dataPoints: points
        };
        data.push(columns);
    }

    var chart = new CanvasJS.Chart("chartContainer", {
        exportEnabled: true,
        animationEnabled: true,
        title: {
            text: "Beat Details with Bottles Grouping"
        },
        subtitles: [{
            text: "Click Legend to Hide or Unhide Data Series"
        }],
        axisX: {
            title: "States"
        },
        axisY: {
            title: "Bottles",
            titleFontColor: "#4F81BC",
            lineColor: "#4F81BC",
            labelFontColor: "#4F81BC",
            tickColor: "#4F81BC"
        },
        data: data
    });
    chart.render();
}


function emptyBottles(result) {
    var data = [];
    for (var i = 0; i < result.length; i++) {
        var label = result[i].beatName + "(" + new Date(result[i].creationDate).toString("dd MMM yyyy") + ")";
        data.push({"label": label, y: result[i].emptyBottles});
    }
    return data;
}

function placedBottles(result) {
    var data = [];
    for (var i = 0; i < result.length; i++) {
        var label = result[i].beatName + "(" + new Date(result[i].creationDate).toString("dd MMM yyyy") + ")";
        data.push({"label": label, y: result[i].placedBottles});
    }
    return data;
}

function orderedBottles(result) {
    var data = [];
    for (var i = 0; i < result.length; i++) {
        var label = result[i].beatName + "(" + new Date(result[i].creationDate).toString("dd MMM yyyy") + ")";
        data.push({"label": label, y: result[i].orderedBottles});
    }
    return data;
}

$.post(commonUrl.findBeat, function (data) {
    loadSelectOptions("#beats", data.result, true);
    $("#beats").multipleSelect();
});

function validate_report_dates() {
    if ($("#from-date").val() == "") {
        alert("Select From Date");
        return false;
    }

    if ($("#to-date").val() == "") {
        alert("Select To Date");
        return false;
    }

    return true;
}

