function findLargestBySumOfDigits() {
	'use strict';

	var sumDig = 0;
	var num = 0;

	if(arguments.length === 0) {
		return undefined;
	}

	for(var numberIndex in arguments) {
		
		if(arguments[numberIndex] % 1 !== 0) {
			return undefined;
		}

		var currentSumDigits = sumOfDigits(Math.abs(arguments[numberIndex]));

		if(currentSumDigits > sumDig) {
			sumDig = currentSumDigits;
			num = arguments[numberIndex];
		}
	}

	return num;

	function sumOfDigits(num) {
		var sum = 0;

		while(num !== 0){
			sum += num % 10;
			num /= 10;
		}

		return sum;
	}
}

(function() {
	console.log(findLargestBySumOfDigits(5, 10, 15, 111));

	console.log(findLargestBySumOfDigits(33, 44, -99, 0, 20));

	console.log(findLargestBySumOfDigits('hello'));

	console.log(findLargestBySumOfDigits(5, 3.3));
})();