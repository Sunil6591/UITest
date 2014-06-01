myFirstApp.controller("MainController",function($scope,mainData) {

	mainData.get(function(data) {
		$scope.main = data;
	});

});