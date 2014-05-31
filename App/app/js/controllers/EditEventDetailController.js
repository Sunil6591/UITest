"use strict";

myFirstApp.controller("EditEventDetailController",function($scope) {
	$scope.saveEvent = function(event,newEventForm) {
		if (newEventForm.$valid) {
			alert(event.date);
		}
	}

	$scope.cancelEvent = function() {
		window.location = "/EventDetails.html";
	}
});