var Person = (function() {

	function Person(firstName, lastName, age) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
	}

	Person.prototype.getFullName = function() {
		var name = this.firstName + ' ' + this.lastName + '(age ' + this.age + ')';
		return name;
	};

	return Person;
})();

function group(persons, sortType) {
	var sorted = {};

	for(var personIndex in persons) {
		var personsArray = sorted['Group ' + persons[personIndex][sortType]];

		if(personsArray === undefined) {
			personsArray = [];
		}

		personsArray.push(persons[personIndex].getFullName());
		sorted['Group ' + persons[personIndex][sortType]] = personsArray;
	}

	for(var p in sorted) {
		console.log(p + ' : [' + sorted[p].join(', ') + ']');
	}
}

(function() {
	var persons = [
		new Person("Scott", "Guthrie", 38),
  	new Person("Scott", "Johns", 36),
  	new Person("Scott", "Hanselman", 39),
  	new Person("Jesse", "Liberty", 57),
  	new Person("Jon", "Skeet", 38)
	];

	group(persons, 'firstName');
	group(persons, 'lastName');
	group(persons, 'age');
})();

