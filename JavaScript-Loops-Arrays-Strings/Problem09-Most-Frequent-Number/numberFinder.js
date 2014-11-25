'use strict';

function findMostFreqNum(inputArr) {
	
	var frequencies = {};

	(function() {
		for(var i in inputArr) {
			var times = frequencies[inputArr[i]];
			
			if(times === undefined) {
				times = 0;
			}

			frequencies[inputArr[i]] = times + 1;
		}
	})();

	var maxFreqNum;
	var maxFreq = 0;

	(function() {
		for(var i in frequencies){
			
			if(frequencies[i] > maxFreq) {
				maxFreqNum = i;
				maxFreq = frequencies[i];
			}
		}
	})();

	return maxFreqNum + ' (' + maxFreq + ' times)';
}

(function() {
	var firstExample = [4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3];
	console.log(findMostFreqNum(firstExample));

	var secondExample = [2, 1, 1, 5, 7, 1, 2, 5, 7, 3, 87, 2, 12, 634, 123, 51, 1];
	console.log(findMostFreqNum(secondExample));

	var thirdExample = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
	console.log(findMostFreqNum(thirdExample));
})();

