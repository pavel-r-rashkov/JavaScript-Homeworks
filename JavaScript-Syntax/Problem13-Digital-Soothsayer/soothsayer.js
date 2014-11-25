'use strict';

function soothsayer(value) {
	
	var result = [];

	result.push(value[0][Math.floor(Math.random() * 5)]);
	result.push(value[1][Math.floor(Math.random() * 5)]);
	result.push(value[2][Math.floor(Math.random() * 5)]);
	result.push(value[3][Math.floor(Math.random() * 5)]);

	return result; 
} 

(function() {

	var result = soothsayer([[3, 5, 2, 7, 9], ['Java', 'Python', 'C#', 'JavaScript', 'Ruby'], ['Silicon Valley', 'London', 'Las Vegas', 'Paris', 'Sofia'], ['BMW', 'Audi', 'Lada', 'Skoda', 'Opel']]);

	console.log('You will work ' + result[0] + ' years on ' + result[1] + '. You will live in ' + result[2] + ' and drive ' + result[3] + '.');
})();