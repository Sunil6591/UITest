myFirstApp.controller("SearchCompanyController",function($scope) {
	$scope.search = function(SearchForm) {
		if (SearchForm.$valid) {
			alert('Searching ...');
		}
	}
});