"use strict";

myFirstApp.directive("upVote", function() {
	return {
		restrict: "E",
		templateUrl: "/templates/directives/upVote.html",
		scope: {
			upvote: "&",
			downvote: "&",
			count: "="
		}
	};
})