'use strict';

function findMaxSequence(inputArr) {
	
	var maxSeq = [];
	var lastElement = inputArr[0];
	var currentSeq = [inputArr[0]];

	for(var i = 1 ; i < inputArr.length ; i += 1) {
		if (lastElement === inputArr[i]) {
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

	return maxSeq;
}

(function() {
	var firstExample = [2, 1, 1, 2, 3, 3, 2, 2, 2, 1];
	console.log(findMaxSequence(firstExample));

	var secondExample = ['happy'];
	console.log(findMaxSequence(secondExample));

	var thirdExample = [2, 'qwe', 'qwe', 3, 3, '3'];
	console.log(findMaxSequence(thirdExample));
})();

