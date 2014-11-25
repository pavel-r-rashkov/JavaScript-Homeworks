Array.prototype.removeItem = function(item) {
	
	while(this.indexOf(item) >= 0) {
		this.splice(this.indexOf(item), 1);
	}
}

(function() {
	var firstExample = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, '1'];
	firstExample.removeItem(1);
	console.log(firstExample.join(', '));
	
	var secondExample = ['hi', 'bye', 'hello' ];
	secondExample.removeItem('bye');
	console.log(secondExample.join(', '));
})();

