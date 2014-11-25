'use strict';

function findMostFreqWord(input) {
	
	var tokens = input.match(/\w+/g);
	var frequences = {};
	var maxFreqWords = [];
	var maxCount = 0;

	(function() {
		for(var i in tokens) {
			var count = frequences[tokens[i].toLowerCase()];
			
			if(count === undefined) {
				count = 0;
			}

			frequences[tokens[i].toLowerCase()] = count + 1;
		}
	})();

	(function() {
		for(var i in frequences) {
			if(frequences[i] > maxCount) {
				maxFreqWords = [i];
				maxCount = frequences[i];

			}else if(frequences[i] === maxCount) {
				maxFreqWords.push(i);
			}
		}
	})();

	maxFreqWords.sort();

	(function() {
		for(var i in maxFreqWords) {
			var count = frequences[maxFreqWords[i]];
			console.log(maxFreqWords[i] + ' -> ' + count + ' times');
		}
	})();
}

(function() {
	var firstExample = 'in the middle of the night';
	findMostFreqWord(firstExample);
	console.log('------------');

	var secondExample = 'Welcome to SoftUni. Welcome to Java. Welcome everyone.';
	findMostFreqWord(secondExample);
	console.log('------------');

	var thirdExample = 'Hello my friend, hello my darling. Come on, come here. Welcome, welcome darling.';
	findMostFreqWord(thirdExample);
})();

