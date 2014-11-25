function findNthDigit(arr) {
	'use strict';
	
	var digitIndex = arr[0];
	var number = arr[1].toString();
	number = number.replace('.', '');
	var digit = number.substring(number.length - digitIndex, number.length - digitIndex + 1);

	if(number.length - digitIndex < 0) {
		return 'The number doesn’t have ' + digitIndex + ' digits';
	}

	return digit;
}

(function() {
	var firstExample = [1, 6];
	console.log(findNthDigit(firstExample));

	var secondExample = [2, -55];
	console.log(findNthDigit(secondExample));

	var thirdExample = [6, 923456];
	console.log(findNthDigit(thirdExample));

	var fourthExample = [3, 1451.78];
	console.log(findNthDigit(fourthExample));

	var fifthExample = [6, 888.88];
	console.log(findNthDigit(fifthExample));
})();

