'use strict';

function extractContent(htmlFragment) {
	
	var a = document.createElement('DIV');
	a.innerHTML = htmlFragment;
	return a.innerText;
}

(function() {
	var firstExample = "<p>Hello</p><a href='http:\/\/w3c.org'>W3C</a>";
	console.log(extractContent(firstExample));

})();

