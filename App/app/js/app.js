'use strict';


var myFirstApp = angular.module('myFirstApp',['ngResource','ngRoute','ngSanitize','kendo.directives','ui.bootstrap'])
.config(function($routeProvider) {
	$routeProvider
	.when("/home",
	{
		templateUrl: "templates/main.html"
	})
	.when("/employeeDir",
	{
		templateUrl: "templates/employeeDir.html"
	})
	.when("/search",
	{
		templateUrl: "templates/search.html"
	})
	.otherwise({redirectTo:"/home"});
});
