function lastDigitAsText(number) {
	'use strict';
	
	var lastDigit = Math.abs(number % 10);
	var result;

	switch(lastDigit) {
		case 0:
			result = 'zero'; break;
		case 1:
			result = 'one'; break;
		case 2:
			result = 'two'; break;
		case 3:
			result = 'three'; break;
		case 4:
			result = 'four'; break;
		case 5:
			result = 'five'; break;
		case 6:
			result = 'six'; break;
		case 7:
			result = 'seven'; break;
		case 8:
			result = 'eight'; break;
		case 9:
			result = 'nine'; break;
		default:
			result = 'no'; break;
	}

	return result;
}

(function() {
	var firstExample = 6;
	console.log(lastDigitAsText(firstExample));

	var secondExample = -55;
	console.log(lastDigitAsText(secondExample));

	var thirdExample = 133;
	console.log(lastDigitAsText(thirdExample));

	var fourthExample = 14567;
	console.log(lastDigitAsText(fourthExample));
})();

