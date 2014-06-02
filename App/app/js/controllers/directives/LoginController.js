myFirstApp.controller("LoginController",function($scope) {
	$scope.signIn = function(LoginForm) {
		if (LoginForm.$valid) {
			alert('Ready to SignIn with User - '+ $scope.userId);
		}
		
	}
})