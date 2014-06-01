myFirstApp.factory("companyData",function($resource) {
	return $resource('data/company.json');  
});