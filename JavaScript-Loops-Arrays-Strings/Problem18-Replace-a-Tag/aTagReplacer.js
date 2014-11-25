'use strict';

function replaceATag(html) {

	var anchors = html.match(/<a[^>]+>([^<]*(?:(?!<\/a)<[^<]*)*)<\/a>/g);

	for(var anchorIndex in anchors) {
		var aElement = anchors[anchorIndex];
		var url = aElement.match(/http[^>]+/);
		var content = aElement.substring(aElement.indexOf('>') + 1, aElement.lastIndexOf('<'));
		
		html = html.replace(aElement, buildElement(url, content));
	}

	return html;

	function buildElement(hyperlink, cont) {
		return '[URL href=' + hyperlink + ']' + cont + '[/URL]';
	}
}

(function() {
	var firstExample = '<ul><li><a href=http://softuni.bg>SoftUni</a></li></ul>';
	console.log(replaceATag(firstExample));
	
	var secondExample = '<ul><li><a href=http://softuni.bg>SoftaUni<span>mm</span></a><div>asd</div><a href=http://softuni.bg>SoftUni</a></li></ul>';
	console.log(replaceATag(secondExample));
})();

