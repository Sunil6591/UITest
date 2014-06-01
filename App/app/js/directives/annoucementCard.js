myFirstApp.directive("annoucementCard",function() {
	return {
		restrict: "E",
		replace: true,
		templateUrl: "/templates/directives/annoucementCard.html",
		controller: "AnnoucementCardController",
		scope: {
			card: "="
			}
		};
	
});