'use strict';

function treeHouseCompare(a, b) {
	
	var houseArea = Math.pow(a, 2) + a * 2 / 3 * a * 0.5;
	var treeArea = Math.pow((4 / 3 * b) / 2, 2) * Math.PI + b * 1 / 3 * b;
	
	if (houseArea > treeArea) {
		return 'house/' + houseArea.toFixed(2);
	}else if((houseArea < treeArea)) {
		return 'tree/' + treeArea.toFixed(2);
	}else{
		return 'equal/' + treeArea.toFixed(2);
	}
} 

(function() {

	console.log(treeHouseCompare(3, 2));

	console.log(treeHouseCompare(3, 3));

	console.log(treeHouseCompare(4, 5));
})();