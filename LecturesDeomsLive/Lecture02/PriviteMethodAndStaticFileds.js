var Person = (function() {
    var count = 0;

    function Person(name, age) {
        this._name = name;
        this._age = age;
        count++;
    }

    function sayHelloName() {
        return "Name: " + this._name;
    }

    function sayHelloAge() {
        return ", Age: " + this._age;
    }

    Person.prototype.sayHello = function personSayHello() {
        return sayHelloName.call(this) + sayHelloAge.call(this);
    }

    return Person;
});

var p = new Person("Pesho", 12);
console.log(p.sayHello());