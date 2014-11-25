'use strict';

function fixCasing(input) {
	var tokensLowcase = input.match(/<lowcase>([^<]*(?:(?!<\/lowcase)<[^<]*)*)<\/lowcase>/g);
	var tokensUpcase = input.match(/<upcase>([^<]*(?:(?!<\/upcase)<[^<]*)*)<\/upcase>/g);
	var tokensMixcase = input.match(/<mixcase>([^<]*(?:(?!<\/mixcase)<[^<]*)*)<\/mixcase>/g);

	function change(arr, callback, inp) {

		for(var mixCaseIndex in arr) {
			var token = arr[mixCaseIndex];
			var content = token.substring(token.indexOf('>') + 1, token.lastIndexOf('<'));
			content = callback(content);
			inp = inp.replace(token, content);
		}
		return inp;
	}

	input = change(tokensMixcase, toMixCase, input);
	input = change(tokensLowcase, toLowCase, input);	
	input = change(tokensUpcase, toUpCase, input);	

	return input;

	function toLowCase(str) {
		return str.toLowerCase();
	}

	function toUpCase(str) {
		return str.toUpperCase();
	}

	function toMixCase(str) {
		var result = [];

		for(var ch in str) {
			var rnd = Math.random();
			if(rnd < 0.5) {
				result.push(str[ch].toLowerCase());
			}else{
				result.push(str[ch].toUpperCase());
			}
		}

		return result.join('');
	}
}

(function() {
	var firstExample = "We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don't</mixcase> have <lowcase>anyTHing</lowcase> else.";
	console.log(fixCasing(firstExample));
})();

