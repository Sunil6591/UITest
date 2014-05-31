myFirstApp.controller("MainMenuController",function($scope,$location) {
	$scope.createEvent = function() {
		$location.url("#/newEvent");
	}
})