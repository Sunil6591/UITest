myFirstApp.controller("MainController",function($scope,mainData) {

	mainData.get(function(data) {
		$scope.main = data;

		$scope.main.tabUrls = new kendo.data.ObservableArray([]);

		_.each($scope.main.tabs, function(tab) { 

			$scope.main.tabUrls.push(tab.url);

		});
	});

});