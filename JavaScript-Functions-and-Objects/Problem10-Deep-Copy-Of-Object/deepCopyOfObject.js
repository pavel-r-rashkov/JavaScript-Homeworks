function clone(obj) {
	var cloned = JSON.parse(JSON.stringify(obj));

	return cloned;
}

function compareObjects(a, b) {
	console.log('a == b --> ' + (a == b)); 
}

(function() {
	var firstExampleObj = {name: 'Pesho', age: 21};
	var firstExampleObjCloned = clone(firstExampleObj);
	compareObjects(firstExampleObj, firstExampleObjCloned);

	var secondExampleObj = {name: 'Pesho', age: 21};
	var secondExampleObjCloned = secondExampleObj;
	compareObjects(secondExampleObj, secondExampleObjCloned);
})();

