"use strict";

function isPrime(value) {

	if (value === 2) {return true}; 
	var maxDivider = Math.sqrt(value);
	var divider = 2;

	while(divider <= maxDivider) {
		if (value % divider === 0) {
			return false;
		}
		divider += 1;
	}

	return true;
} 

(function() {

	var firstExample = 7
	console.log(isPrime(firstExample));

	var secondExample = 254
	console.log(isPrime(secondExample));

	var thirdExample = 587
	console.log(isPrime(thirdExample));
})();