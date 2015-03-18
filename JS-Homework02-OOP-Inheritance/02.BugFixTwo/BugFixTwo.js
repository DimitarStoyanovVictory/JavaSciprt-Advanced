function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
    (function() {

    });
}

Object.defineProperty(Person.prototype, "fullName", {
    get: function() {
        return this.firstName + " " + this.lastName;
    },
	//set: function (val) {
	//	var fullName = val.split(" ");
	//	this.firstName = fullName[0];
	//	this.lastName = fullName[1];
	//	return this.firstName + " " + this.lastName;
	//}

});

//	//if you have set you can change lastName

var person = new Person("Peter", "Jackson");
console.log(person.fullName);
console.log(person.firstName);
console.log(person.lastName);

person.firstName = "Michael";
console.log(person.firstName);
console.log(person.fullName);
person.lastName = "Williams";
console.log(person.lastName);
console.log(person.fullName);

//Example 

//person.fullName = "Dimitar Kunchev";
//console.log(person.fullName);
