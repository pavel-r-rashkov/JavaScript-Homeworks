"use strict";

function roundNumber(value) {
	
	console.log('using math.floor: ' + Math.floor(value));
	console.log('using math.round: ' + Math.round(value));
	console.log('------------------');
}

(function() {
	var firstExample = 22.7;
	roundNumber(firstExample);

	var secondExample = 12.3;
	roundNumber(secondExample);

	var thirdExample = 58.7;
	roundNumber(thirdExample);
})();