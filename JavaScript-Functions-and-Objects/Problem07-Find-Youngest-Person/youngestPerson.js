function findYoungestPerson(persons) {
  'use strict';
  
	var youngestPerson = {age: Number.MAX_VALUE};

	for(var personIndex in persons) {

		if(persons[personIndex].age < youngestPerson.age) {
			youngestPerson = JSON.parse(JSON.stringify(persons[personIndex]));
		}
	}

	return 'The youngest person is ' + youngestPerson.firstname + ' ' + youngestPerson.lastname;
}

(function() {
	var firstExample = [
  		{ firstname : 'George', lastname: 'Kolev', age: 32}, 
  		{ firstname : 'Bay', lastname: 'Ivan', age: 81},
    	{ firstname : 'Baba', lastname: 'Ginka', age: 40}
    ];
	console.log(findYoungestPerson(firstExample));
})();

