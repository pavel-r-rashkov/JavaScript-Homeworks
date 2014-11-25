var hideButton = document.getElementById('btnHideOddRows');
hideButton.addEventListener('click', hide, false);

function hide() {
	var rows = document.getElementsByTagName('tr');

	for(var i = 0 ; i < rows.length ; i += 2) {
		rows[i].style.display = 'none';
	}
}