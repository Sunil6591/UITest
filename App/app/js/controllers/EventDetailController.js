myFirstApp.controller('EventDetailController', 
	function($scope,eventsData,$routeParams) {
		$scope.sortorder = "name";
		$scope.events = eventsData.getEvent($routeParams.eventId);

		$scope.addVote = function(session) {
			session.upVoteCount++;
		}

		$scope.subVote = function(session) {
			if (session.upVoteCount!=0) {
				session.upVoteCount--;
			}
		}
	});