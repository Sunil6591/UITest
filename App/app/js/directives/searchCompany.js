myFirstApp.directive("searchCompany",function() {
	return {
		restrict: "E",
		controller: "SearchCompanyController",
		templateUrl: "/templates/directives/searchCompany.html"
	};
})