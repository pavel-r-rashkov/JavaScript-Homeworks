'use strict';

function displayProperties(obj) {

	var result = Object.getOwnPropertyNames(obj);
	result.sort();

	for(var prop in result) {
		console.log(result[prop]);
	}
}

(function() {
	displayProperties(document);	
})();

