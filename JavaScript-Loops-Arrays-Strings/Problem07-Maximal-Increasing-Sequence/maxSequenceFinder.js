'use strict';

function findMaxSequence(inputArr) {
	
	var maxSeq = [];
	var lastElement = inputArr[0];
	var currentSeq = [inputArr[0]];

	for(var i = 1 ; i < inputArr.length ; i += 1) {
		if (lastElement < inputArr[i]) {
			currentSeq.push(inputArr[i]);
		}else{
			if(currentSeq.length >= maxSeq.length){
				maxSeq = currentSeq;
			}
			currentSeq = [inputArr[i]];
		}
		lastElement = inputArr[i];
	}

	if(currentSeq.length >= maxSeq.length){
		maxSeq = currentSeq;
	}

	return maxSeq.length > 1 ? maxSeq : 'no';
}

(function() {
	var firstExample = [3, 2, 3, 4, 2, 2, 4];
	console.log(findMaxSequence(firstExample));

	var secondExample = [3, 5, 4, 6, 1, 2, 3, 6, 10, 32];
	console.log(findMaxSequence(secondExample));

	var thirdExample = [3, 2, 1];
	console.log(findMaxSequence(thirdExample));
})();

