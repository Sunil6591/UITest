myFirstApp.factory("mainData",function($resource) {
	return $resource('data/main.json');
});