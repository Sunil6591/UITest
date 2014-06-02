myFirstApp.controller("CompanyTabController", function($scope,$parse,companyData) {
	$scope.oneAtATime = true;

	//$scope.company = {};
	companyData.get(function(data){
		
		$scope.company = data;
	});
	
	
	$scope.isCompatible = function() {
		if (isIE () && isIE () <= 8) {
			return false;
		} else {
			return true;
		}
	}

	function isIE () {
		var myNav = navigator.userAgent.toLowerCase();
		return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
	}
})