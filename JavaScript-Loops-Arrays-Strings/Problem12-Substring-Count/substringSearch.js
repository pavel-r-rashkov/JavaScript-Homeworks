'use strict';

function countSubstringOccur(input) {
	var word = input[0].toUpperCase();
	var text = input[1].toUpperCase();
	var count = 0;
	var lastIndex = -1;

	while(text.indexOf(word, lastIndex + 1) >= 0) {
		count += 1;
		lastIndex = text.indexOf(word, lastIndex + 1);
	}
	
	return count;
}

(function() {
	var firstExample = ['in', 'We are living in a yellow submarine. We don\'t have anything else. Inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.'];
	console.log(countSubstringOccur(firstExample));

	var secondExample = ['your', 'No one heard a single word you said. They should have seen it in your eyes. What was going around your head.'];
	console.log(countSubstringOccur(secondExample));

	var thirdExample = ['but', 'But you were living in another world tryin\' to get your message through.'];
	console.log(countSubstringOccur(thirdExample));
})();

