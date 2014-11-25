'use strict';

function compareChars(firstArr, secondArr) {
	
	if(firstArr.length !== secondArr.length) {
		return 'Not Equal';
	}else{
		for(var i = 0 ; i < firstArr.length ; i+=1) {
			if(firstArr[i].toLowerCase() !== secondArr[i].toLowerCase()) {
				return 'Not Equal';
			}
		}
		return 'Equal';
	}
}

(function() {
	var firstExample1 = ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'];
	var firstExample2 = ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'];
	console.log(compareChars(firstExample1, firstExample2));

	var secondExample1 = ['3', '5', 'g', 'd'];
	var secondExample2 = ['5', '3', 'g', 'd'];
	console.log(compareChars(secondExample1, secondExample2));

	var thirdExample1 = ['q', 'g', 'q', 'h', 'a', 'k', 'u', '8', '}', 'q', '.', 'h', '|', ';'];
	var thirdExample2 = ['6', 'f', 'w', 'q', ':', '”', 'd', '}', ']', 's', 'r'];
	console.log(compareChars(thirdExample1, thirdExample2));
})();

