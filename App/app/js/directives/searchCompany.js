myFirstApp.directive("searchCompany",function() {
	return {
		restrict: "EA",
		controller: "SearchCompanyController",
		templateUrl: "/templates/directives/searchCompany.html"
	};
})