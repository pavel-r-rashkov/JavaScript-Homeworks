'use strict';

function createArray() {
	var arr = [];

	for (var i = 0 ; i < 20 ; i+=1) {
		arr[i] = i * 5;
	}

	return arr;
}

(function() {
	var array = createArray();
	console.log(array);
})();

