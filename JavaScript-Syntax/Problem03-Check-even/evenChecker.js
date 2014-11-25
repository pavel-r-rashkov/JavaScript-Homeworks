"use strict";

function evenNumber(value) {
	return (value % 2 === 0);
} 

(function() {

	var firstExample = 3
	console.log(evenNumber(firstExample));

	var secondExample = 127
	console.log(evenNumber(secondExample));

	var thirdExample = 588
	console.log(evenNumber(thirdExample));
})();