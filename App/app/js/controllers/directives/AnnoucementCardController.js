myFirstApp.controller("AnnoucementCardController",function($scope) {

	$scope.checkImage = function(imageUrl) {
		if (imageUrl) {
			return true;
		}
		else {
			return false;
		}
	}	
});