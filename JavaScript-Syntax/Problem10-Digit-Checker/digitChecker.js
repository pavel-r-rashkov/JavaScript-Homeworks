'use strict';

function checkDigit(value) {
	
	var thirdDigit = Math.floor(value / 100) % 10;
	return thirdDigit === 3;
} 

(function() {

	console.log(checkDigit(1235));

	console.log(checkDigit(25368));

	console.log(checkDigit(123456));
})();