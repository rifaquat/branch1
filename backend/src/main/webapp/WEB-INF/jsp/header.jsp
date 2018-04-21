<%@ taglib uri = "http://java.sun.com/jsp/jstl/core" prefix = "c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>Om Aqua</title>
    <link rel="icon" href="/images/favicon.png">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <META NAME="ROBOTS" CONTENT="NOINDEX, NOFOLLOW">
    <link href="/css/font-awesome.css" rel="stylesheet" type="text/css" />
    <link href="/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="/css/animate.css" rel="stylesheet" type="text/css" />
    <link href="/css/admin.css" rel="stylesheet" type="text/css" />
    <link href="/plugins/map/jquery-jvectormap-1.2.2.css" rel="stylesheet" type="text/css" />
    <link href="/css/jquery.dataTables.min.css" rel="stylesheet" type="text/css" />
    <link href="/css/jquery-ui.css" rel="stylesheet" type="text/css" />
    <link href="/js/multiple-select-master/multiple-select.css" rel="stylesheet" type="text/css" />
</head>

<body class="light_theme  fixed_header left_nav_fixed">
<div class="wrapper">
    <!--\\\\\\\ wrapper Start \\\\\\-->
    <div class="header_bar">
        <!--\\\\\\\ header Start \\\\\\-->
        <div class="brand">
            <!--\\\\\\\ brand Start \\\\\\-->
            <div class="logo" style="display:block"><span class="theme_color">VMS</span></div>
            <div class="small_logo" style="display:none">
                <img src="/images/s-logo.png" width="50" height="47" alt="s-logo" /> <img src="/images/r-logo.png" width="122" height="20" alt="r-logo" />
            </div>
        </div>
        <!--\\\\\\\ brand end \\\\\\-->
        <div class="header_top_bar">
            <!--\\\\\\\ header top bar start \\\\\\-->
            <a href="javascript:void(0);" class="menutoggle"> <i class="fa fa-bars"></i> </a>
            <div class="top_left">
                <div class="top_left_menu">
                    <ul>
                        <li> <a class="refresh" href="javascript:void(0);"> <i class="fa fa-repeat"></i> </a> </li>
                    </ul>
                </div>
            </div>
            <div class="top_right_bar">
                <div class="user_admin dropdown"> <a href="javascript:void(0);" data-toggle="dropdown"><img src="/images/user.png" width="40" height="40" /><span class="user_adminname">${sessionScope.loggedInUser.firstName}</span> <b class="caret"></b> </a>
                    <ul class="dropdown-menu">
                        <div class="top_pointer"></div>
                        <li><a href="/logout"><i class="fa fa-power-off"></i> Logout</a> </li>
                    </ul>
                </div>
            </div>
        </div>
        <!--\\\\\\\ header top bar end \\\\\\-->
    </div>
    <!--\\\\\\\ header end \\\\\\-->
    <div class="inner">
        <!--\\\\\\\ inner start \\\\\\-->
        <div class="left_nav">
            <!--\\\\\\\left_nav start \\\\\\-->

            <div class="left_nav_slidebar">
                <div class="left_nav_slidebar">
                    <ul>
                        <%--<li><a href="#"><i class="fa fa-home"></i> DASHBOARD <span class="left_nav_pointer"></span></a></li>--%>
                        <li><a href="/vehicle"><i class="fa fa-truck"></i> Vehicle <span class="left_nav_pointer"></span></a></li>
                        <li><a href="/reports"><i class="fa fa-area-chart"></i> Reports <span class="left_nav_pointer"></span></a></li>
                    </ul>
                </div>
            </div>
        </div>