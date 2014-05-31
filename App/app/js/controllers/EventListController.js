myFirstApp.controller("EventListController",function($scope,eventsData) {
	$scope.events = eventsData.getAllEvents();
});