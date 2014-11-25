var input = document.getElementById('numbersInput');
input.addEventListener('change', check, false);
var prevValue = input.value;

function check() {
	var value = input.value;
	var nonDigit = value.match(/[^\d]/);

	if(nonDigit === null) {
		prevValue = value;
	}else{
		changeBackground(input);
		input.value = prevValue;
	}
}

function changeBackground(element) {
	element.style.background = 'red';
	setTimeout(function(){element.style.background = 'white'}, 2000);
}