'use strict';

myFirstApp.directive("loginControl",function() {
	return {
		restrict: "E",
		replace: true,
		templateUrl: "/templates/directives/loginControl.html"

	};
})