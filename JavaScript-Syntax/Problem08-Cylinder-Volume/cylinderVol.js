'use strict';

function calcCylinderVol(radius, height) {
	
	var area = Math.PI * Math.pow(radius, 2);
	return area * height;
} 

(function() {

	console.log(calcCylinderVol(2, 4).toFixed(3));

	console.log(calcCylinderVol(5, 8).toFixed(3));

	console.log(calcCylinderVol(12, 3).toFixed(3));
})();