myFirstApp.directive("annoucementCard",function($compile, $timeout) {
	return {
		restrict: "E",
		replace: true,
		templateUrl: "/templates/directives/annoucementCard.html",
		controller: "AnnoucementCardController"		
	};
});