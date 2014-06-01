myFirstApp.factory("companyData",function($resource) {
	return $resource('data/company/company.json');  
});