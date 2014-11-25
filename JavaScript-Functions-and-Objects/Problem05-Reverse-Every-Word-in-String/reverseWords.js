function reverseWordsInString(str) {
	'use strict';
	
	var tokens = str.split(/\s/);
	
	for(var wordIndex in tokens) {
		tokens[wordIndex] = tokens[wordIndex].split('').reverse().join('');
	}

	return tokens.join(' ');
}

(function() {
	var firstExample = 'Hello, how are you.';
	console.log(reverseWordsInString(firstExample));

	var secondExample = 'Life is pretty good, isn’t it?';
	console.log(reverseWordsInString(secondExample));
})();

