'use strict';

function findMinAndMax(value) {
	
	console.log('Min -> ' + Math.min.apply(Math, value));
	console.log('Max -> ' + Math.max.apply(Math, value));
}

(function() {
	var firstExample = [1, 2, 1, 15, 20, 5, 7, 31];
	console.log(findMinAndMax(firstExample));

	var secondExample = [2, 2, 2, 2, 2];
	console.log(findMinAndMax(secondExample));

	var thirdExample = [500, 1, -23, 0, -300, 28, 35, 12];
	console.log(findMinAndMax(thirdExample));
})();

