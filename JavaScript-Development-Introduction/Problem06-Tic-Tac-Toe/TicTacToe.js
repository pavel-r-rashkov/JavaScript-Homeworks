"use strict";

var playerTurn = 1;
var fields = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function writeSymbol(element) {
	
	if (!(fields[element.id-1] > 0)) {
		
		if (playerTurn === 1){
			element.style.background = 'url("images/x.png") no-repeat';
			playerTurn = 2;
			fields[element.id-1] = 1;
			checkForWinner();
		} else {
			element.style.background = 'url("images/circle.png") no-repeat';
			playerTurn = 1;
			fields[element.id-1] = 2;
			checkForWinner();
		}	
	}
}

function alertWinner(winner) {

	switch (winner) {
		case 1:
			alert('Player X won'); 
			restartGame(); break;
		case 2:
			alert('Player O won'); 
			restartGame(); break;
	}
}

function checkForEmptyFields() {

	var hasEmpty = false;
	for (var i = 0 ; i < 9 ; i+=1) {
		if (!(fields[i] > 0)) {
			hasEmpty = true;
		}
	}
	return hasEmpty;
}

function checkForWinner() {

	if (fields[0] === fields[1] && fields[0] === fields[2]) {
		alertWinner(fields[0]);
		return;

	} else if (fields[3] === fields[4] && fields[3] === fields[5]) {
		alertWinner(fields[3]);
		return;
		
	} else if (fields[6] === fields[7] && fields[6] === fields[8]) {
		alertWinner(fields[6]);
		return;
		
	} else if (fields[0] === fields[3] && fields[0] === fields[6]) {
		alertWinner(fields[0]);
		return;
		
	} else if (fields[1] === fields[4] && fields[1] === fields[7]) {
		alertWinner(fields[1]);
		return;
		
	} else if (fields[2] === fields[5] && fields[2] === fields[8]) {
		alertWinner(fields[2]);
		return;
		
	} else if (fields[0] === fields[4] && fields[0] === fields[8]) {
		alertWinner(fields[0]);
		return;
		
	} else if (fields[2] === fields[4] && fields[2] === fields[6]) {
		alertWinner(fields[2]);
		return;
	} 

	if (!checkForEmptyFields()) {
		alert('Draw !');
		restartGame();
	}
}

function restartGame() {

	fields = [0, 0, 0, 0, 0, 0, 0, 0, 0];
	var elements = document.getElementsByClassName('field');
	
	for (var i in elements) {
		
		elements[i].style.background = '#FFF'
	}
}