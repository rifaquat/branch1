<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>

<html lang="en">
<head>
<meta charset="utf-8">
<title><spring:message code="welcome.title" /></title>
</head>
<body>
	<h3>
		<spring:message code="welcome.label" />
	</h3>
	<h4>
		<spring:message code="app.name" />
	</h4>
	<c:url value="/login" var="messageUrl" />
	<a href="${messageUrl}">Login</a>



	<c:url value="/resources/text.txt" var="url" />
	<spring:url value="/resources/text.txt" htmlEscape="true"
		var="springUrl" />
	Spring URL: ${springUrl} at ${time}
	<br> JSTL URL: ${url}
	<br> Message: ${message}
</body>

</html>

