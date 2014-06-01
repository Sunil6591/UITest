myFirstApp.controller("CompanyTabController", function($scope,companyData) {
	$scope.oneAtATime = true;

	//$scope.company = {};
	companyData.get(function(data){
		$scope.company = data;
	});
	

	
})