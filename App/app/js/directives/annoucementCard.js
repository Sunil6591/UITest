myFirstApp.directive("annoucementCard",function($compile) {
	return {
		restrict: "E",
		replace: true,
		templateUrl: "/templates/directives/annoucementCard.html",
		controller: "AnnoucementCardController",
		link: function(scope,element,attrs,controller) {
			$compile(element.find("p"))(scope);
		},
		scope: {
			card: "="
			}
		};
	
});