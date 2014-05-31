"use strict";

myFirstApp.directive("eventThumbnail", function() {
	return {
		restrict: "E",
		templateUrl: "/templates/directives/eventThumbnail.html",
		scope: {
			event: "="
		}
	};
})