<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>${application.title}</title>
    <link rel="icon" href="/images/favicon.png">
    <link rel="stylesheet" href="/css/reset.min.css">
    <link rel='stylesheet prefetch'
          href='https://fonts.googleapis.com/css?family=Roboto:400,100,300,500,700,900|RobotoDraft:400,100,300,500,700,900'>
    <link rel='stylesheet prefetch' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css'>

    <link rel="stylesheet" href="css/style_login.css">


</head>

<body>

<!-- Mixins-->
<!-- Pen Title-->
<div class="rerun"></div>
<div id="login_div" class="container">
    <div class="card"></div>
    <div class="card">
        <h1 class="title">Login</h1>
        <div class="input-container">
            <input type="text" id="username" required="required"/>
            <label for="username">Username</label>

            <div class="bar"></div>
        </div>
        <div class="input-container">
            <input type="password" id="password" required="required"/>
            <label for="password">Password</label>

            <div class="bar"></div>
        </div>
        <div class="button-container">
            <button id="login"><span>Go</span></button>
        </div>
        <div class="footer"><a id="forgotpassword" href="#">Forgot your password?</a></div>
    </div>
    <div class="card alt">
        <div class="toggle"></div>
        <h1 class="title">Forgot
            <div class="close"></div>
        </h1>
        <form>
            <div class="input-container">
                <input type="text" id="forgot-username" required="required"/>
                <label for="forgot-username">Username</label>

                <div class="bar"></div>
            </div>
            <div class="button-container">
                <button><span>Confirm</span></button>
            </div>
        </form>
    </div>
</div>
<script src="/js/jquery-1.12.4.js"></script>
<script src="/js/application/login.js"></script>

</body>
</html>
