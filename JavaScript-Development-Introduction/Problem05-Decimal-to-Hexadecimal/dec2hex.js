"use strict";

window.onload = function() {
	var numString = prompt('Enter a number:');
	var num = parseFloat(numString);

	if(isPositiveInteger(num)) {
		var hexString = parseInt(num, 10).toString(16);
		alert(hexString.toUpperCase());
	} else {
		alert('Not a positive integer!');
	}
}

function isPositiveInteger(n) {
    return n === +n && n === (n|0) && n >= 0;
}
