"use strict";

function calcCircleArea(r) {
	var area = Math.PI * Math.pow(r, 2);
	return area;
}

window.onload = function() {
	var firstElement = document.getElementById('firstCircle');
	firstElement.innerHTML = 'r = 7; area = ' + calcCircleArea(7);

	var secondElement = document.getElementById('secondCircle');
	secondElement.innerHTML = 'r = 1.5; area = ' + calcCircleArea(1.5);

	var thirdElement = document.getElementById('thirdCircle');
	thirdElement.innerHTML = 'r = 20; area = ' + calcCircleArea(20);
};



