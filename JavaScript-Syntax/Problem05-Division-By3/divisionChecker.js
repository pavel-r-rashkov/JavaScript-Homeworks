"use strict";

function divisionBy3(value) {

	var sum = 0;
	while (value > 0){
		sum += Math.floor(value % 10);
		value = Math.floor(value / 10);
	}
	console.log('sum is ' + sum);

	if (sum % 3 === 0) {
		console.log('the number is divided by 3 without remainder');
	}else{
		console.log('the number is not divided by 3 without remainder');
	}
} 

(function() {

	var firstExample = 12
	divisionBy3(firstExample);

	var secondExample = 188
	divisionBy3(secondExample);

	var thirdExample = 591
	divisionBy3(thirdExample);
})();