function Person(name, age) {
	this._name = name;
    this._age = age;
}

Person.prototype.sayHello = function personSayHello() {
    return "Name: " + this._name + "Age " + this._age;
}

function Student (name, age, grade) {
	this._name = name;
    this._age = age;
    this._grade = grade;
}

Student.prototype = new Person();

var stanka = new Student("Stanka", 66, 2);
console.log(stanka.sayHello());