'use strict';

function checkBrackets(input) {	
	var openedBrackets = 0;

	for(var i in input) {
		if(input[i] === '(') {
			openedBrackets += 1;

		}else if(input[i] === ')') {
			openedBrackets -= 1;

			if(openedBrackets < 0) {
				return 'incorrect';
			}
		}
	}

	return openedBrackets === 0 ? 'correct' : 'incorrect';
}

(function() {
	var firstExample = '( ( a + b ) / 5 – d )';
	console.log(checkBrackets(firstExample));

	var secondExample = ') ( a + b ) )';
	console.log(checkBrackets(secondExample));

	var thirdExample = '( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )';
	console.log(checkBrackets(thirdExample));
})();

