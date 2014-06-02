myFirstApp.directive("unsafeHtml",function($compile) {
	return {
		restrict: "A",
		link: function(scope,element,attrs) {	
			
			var added = $('<div>'+scope.$eval(attrs.unsafeHtml)+'</div>').appendTo(element);
			$compile(added)(scope)
		}
		
	};
	
});