'use strict';


var myFirstApp = angular.module('myFirstApp',['ngResource','ngRoute','kendo.directives'])
.config(function($routeProvider) {
	$routeProvider
	.when("/newEvent",
	{
		templateUrl: "templates/NewEvent.html",
		controller: "EditEventDetailController"
	})
	.when("/event/:eventId",
	{
		templateUrl: "templates/EventDetails.html",
		controller: "EventDetailController"
	})
	.when("/events",
	{
		templateUrl: "templates/EventList.html",
		controller: "EventListController"
	})
	.when("/sampleDirective",
	{
		templateUrl: "templates/sampleDirectiveExample.html",
		controller: "SampleController"
	})
	.otherwise({redirectTo:"/events"});
});