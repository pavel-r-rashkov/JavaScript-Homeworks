'use strict';

function findPalindromes(input) {
	var tokens = input.match(/\w+/g);
	var palindromes = [];

	for(var i in tokens) {
		if(tokens[i].toUpperCase() === tokens[i].toUpperCase().split('').reverse().join('')) {
			palindromes.push(tokens[i].toLowerCase());
		}
	}

	return palindromes.join(', ');
}

(function() {
	var firstExample = 'There is a man, his name was Bob.';
	console.log(findPalindromes(firstExample));

})();

