myFirstApp.controller("CompanyTabController", function($scope,$parse,companyData) {
	$scope.oneAtATime = true;

	//$scope.company = {};
	companyData.get(function(data){
		
		$scope.company = data;
	});
	
	
	$scope.callMe = function() {
		alert('ok');
	}
})