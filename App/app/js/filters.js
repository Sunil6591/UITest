'use strict';

myFirstApp.filter("durations", function() {
	return function(duration) {
		switch(duration) {
			case 1: return "Half hour";
			case 2: return "Two hours";
			case 4: return "Half day";
			case 8: return "Full day";
		}
	}
})
