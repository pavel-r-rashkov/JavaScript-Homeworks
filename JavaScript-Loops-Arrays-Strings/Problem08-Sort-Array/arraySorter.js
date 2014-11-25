'use strict';

function sortArray(inputArr) {
	
	for(var i = 0 ; i < inputArr.length - 1 ; i += 1) {		
		var min = i;
		
		for (var j = i + 1 ; j < inputArr.length ; j += 1) {
			if(inputArr[j] < inputArr[min]) {
				min = j;
			}
		}

		if(i != min) {
			swap(inputArr, i, min);
		}
	}

	function swap(arr, firstIndex, secondIndex){

		var value = arr[firstIndex];
		arr[firstIndex] = arr[secondIndex];
		arr[secondIndex] = value;
	}
	
}

(function() {
	var firstExample = [5, 4, 3, 2, 1];
	sortArray(firstExample);
	console.log(firstExample);

	var secondExample = [12, 12, 50, 2, 6, 22, 51, 712, 6, 3, 3];
	sortArray(secondExample);
	console.log(secondExample);
})();

