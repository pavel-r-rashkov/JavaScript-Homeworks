var input = document.getElementById('mouseCoordinates');
input.style.width = 650 + 'px';
input.style.height = 400 + 'px';
document.onmousemove = printCoordinates;

function printCoordinates(event) {
	var x = event.clientX; 
	var y = event.clientY;
	var date = new Date();
	input.value += 'X:' + x + '; ' + 'Y:' + y + ' Time: ' + date + '\r\n';
	
}