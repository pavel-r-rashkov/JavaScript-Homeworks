function calculate(){

	var inputField = document.getElementById('inputExpression');
	var result = document.getElementById('result');
	var unallowedChars = inputField.value.match(/[^\.+\/%\-*\(\)\d\s]/g);

  if(unallowedChars) {
    alert('Unallowed characters');
  } else {
    result.innerHTML = eval(inputField.value);
  }
}