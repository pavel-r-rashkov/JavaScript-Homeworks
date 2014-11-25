function countDivs(html) {
	'use strict';
	
	var count = 0;
	var startIndex = 0;

	while(html.search(/<div[\s\S]+>/) >= 0) {
		count += 1;
		startIndex = html.search(/<div[\s\S]+>/);
		html = html.substring(startIndex + 1);
	}

	return count;
}

(function() {
	var firstExample = '<!DOCTYPE html><html><head lang="en"><meta charset="UTF-8"><title>index</title><script src="/yourScript.js" defer></script></head><body><div id="outerDiv"><div class="first"><div><div>hello</div></div></div><div>hi<div></div></div><div>I am a div</div></div></body></html>';
	console.log(countDivs(firstExample));
})();

