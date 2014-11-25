'use strict';

function reverseString(inputStr) {
	var reversed = [];

	for(var i = inputStr.length ; i >= 0 ; i -= 1) {
		reversed.push(inputStr[i]);
	}

	return reversed.join('');
}

(function() {
	var firstExample = 'sample';
	console.log(reverseString(firstExample));

	var secondExample = 'softUni';
	console.log(reverseString(secondExample));

	var thirdExample = 'java script';
	console.log(reverseString(thirdExample));
})();

