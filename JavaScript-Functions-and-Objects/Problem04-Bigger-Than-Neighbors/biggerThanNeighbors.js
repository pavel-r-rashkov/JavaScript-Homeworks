function biggerThanNeighbors(index, arr) {
	'use strict';

	// not-bigger     - false
	// bigger         - true
	// invalid index  - udefined
	
	if(index < 0 || index > arr.length - 1) {
		return undefined;
	}
	
	var biggerRight = true;
	var biggerLeft = true;

	if (index - 1 >= 0 ) {
		biggerLeft = arr[index - 1] < arr[index];
	}

	if(index + 1 <= arr.length - 1) {
		biggerRight = arr[index + 1] < arr[index];

	}
	
	return (biggerLeft && biggerRight);
}

(function() {
	console.log(biggerThanNeighbors(2, [1, 2, 3, 3, 5]));

	console.log(biggerThanNeighbors(2, [1, 2, 5, 3, 4]));

	console.log(biggerThanNeighbors(5, [1, 2, 5, 3, 4]));

	console.log(biggerThanNeighbors(0, [1, 2, 5, 3, 4]));
})();

