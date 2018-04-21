var commonUrl = {
    findPrice : "/price/find",
    findJarType : "/jartype/find",
    findBeat : "/beat/find",
    findArea : "/areas/find"
};
//To make refresh functionality to work main page dataTable reference should be assigned to this variable
var dataTableInst= null;


var areaTypes = {
    STATE : 2,CITY : 3 , AREA : 4 , ALL_AREA : 5
};

var defaultCountry = 1;

//Custom validation
$.validator.addMethod("valueNotEquals", function(value, element, arg){
    return arg != value;
}, "Value must not equal arg.");


function parseDate(str,delimiter) {
    if(null == str || str == undefined){
        return new Date();
    }
    if(null == delimiter || delimiter == undefined){
        delimiter = "/";
    }
    var mdy = str.split(delimiter);
    return new Date(parseInt(mdy[0]), parseInt(mdy[1])-1, parseInt(mdy[2]));
}

function dayDiff(first, second) {
    return Math.round((second-first)/(1000*60*60*24));
}

function calculateHeight(){
    var contentHeight = parseInt($('.contentpanel').height(), 10);
    if (911 > contentHeight) {
        console.log("Small");
    }
}

$(document).ready(function(){
    $(".menutoggle").click(function () {
        if ($('body').hasClass('left_nav_hide')) {
            if(fix==1) $('body').addClass('left_nav_fixed');
            $('body').removeClass('left_nav_hide');
        }
        else {
            if($('body').hasClass('left_nav_fixed')){fix=1;$('body').removeClass('left_nav_fixed');}
            else fix=0;
            $('body').addClass('left_nav_hide');
            calculateHeight();
        }
    });

    $(".refresh").click(function(){
        dataTableInst.ajax.reload();
    });
});


function loadSelectOptions($Id, data, clearAll) {
    if (clearAll) {
        $($Id).empty();
    }

    $.each(data, function (index, value) {
        $('<option>').val(value.id).text(value.name).appendTo($Id);
    });
}


$.validator.addMethod(
    "regex",
    function(value, element, regexp) {
        var check = false;
        return this.optional(element) || regexp.test(value);
    },
    "Please check your input."
);