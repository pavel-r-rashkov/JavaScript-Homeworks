'use strict';

function printNumbers(n) {
	
	if(n < 1) {
		return 'no';
	}else{

		var result = [];
		for(var i = 1 ; i <= n ; i+=1) {
			if(!(i % 4 === 0 || i % 5 === 0)) {
				result.push(i);
			}
		}
		return result.join(', ');
	}
}

(function() {
	var firstExample = 20;
	console.log(printNumbers(firstExample));

	var secondExample = -5;
	console.log(printNumbers(secondExample));

	var thirdExample = 13;
	console.log(printNumbers(thirdExample));
})();

