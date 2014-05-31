myFirstApp.controller("SearchCompanyController",function($scope) {
	$scope.search = function(SearchForm) {
		if (SearchForm.$valid) {
			alert('Searching ...');
		}
	}
	$scope.showhideAdvanceOption = false;
	$scope.advanceOption = function() {
		$scope.showhideAdvanceOption = $scope.showhideAdvanceOption === false ? true:false;
	}
});