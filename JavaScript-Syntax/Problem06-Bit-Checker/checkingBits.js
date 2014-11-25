"use strict";

function bitChecker(value) {
  var bitStr = value.toString(2);
  return bitStr.charAt(bitStr.length - 4) === '1';
} 

(function() {

	var firstExample = 333;
	console.log(bitChecker(firstExample));

	var secondExample = 425;
	console.log(bitChecker(secondExample));

	var thirdExample = 2567564754;
	console.log(bitChecker(thirdExample));
})();