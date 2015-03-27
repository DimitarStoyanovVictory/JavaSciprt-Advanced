function Person(name, age) {
	var _name = name;
	var _age = age;
	this.sayHello = function sayHello() {
        return "My name is: " + _name + " and I'm " + _age + "-years old";
    }
}

var misho = new Person("Mi6o", 20);
var gosho = new Person("Gosho", 21);
console.log(misho.sayHello());
console.log(misho.sayHello === gosho.sayHello);
