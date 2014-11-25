'use strict';

function replaceSpaces(input) {
	
	var nbsp = String.fromCharCode(160);
	var tokens = input.split(new RegExp('\\s+'));
	var replaced = tokens.join(nbsp);
	
	return replaced;
}

(function() {
	var firstExample = 'But you were living in another world tryin\' to get your message through';
	console.log(replaceSpaces(firstExample));

})();

