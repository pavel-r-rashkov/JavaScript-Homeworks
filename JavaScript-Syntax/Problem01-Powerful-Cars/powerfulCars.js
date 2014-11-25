"use strict";

function convertKWtoHP(value) {
	var valueInHP = value / 0.745699872;
	return valueInHP
}

(function() {
	var firstExample = 75;
	console.log(firstExample + ' in kW equals ' + convertKWtoHP(firstExample).toFixed(2) + ' in Hp')

	var secondExample = 150;
	console.log(firstExample + ' in kW equals ' + convertKWtoHP(secondExample).toFixed(2) + ' in Hp')

	var thirdExample = 1000;
	console.log(firstExample + ' in kW equals ' + convertKWtoHP(thirdExample).toFixed(2) + ' in Hp')
})();

