$(document).ready(function () {
    $('#forgotpassword').on('click', function() {
        $('.container').stop().addClass('active');
    });

    $('.close').on('click', function() {
        $('.container').stop().removeClass('active');
    });

    $("#login").click(function(){
        validate();
    });

    $("#login_div").keypress(function(e){
        if(e.which == 13){
            validate();
        }
    });



});

function validate(){
    if($("#username").val() == ""){
        alert("Enter username");
        return;
    }

    if($("#password").val() == ""){
        alert("Enter password");
        return;
    }
    var data = {"userName" : $("#username").val() , "password" : $("#password").val()};

    $.ajax({
        type: "POST",
        url: "/validate",
        data: JSON.stringify(data),
        dataType : 'json',
        success: function (response){
            if(response.code == 200) {
                window.location = window.location.origin;
            }else{
                alert(response.message);
            }
        },
        contentType: "application/json"
    });
}
