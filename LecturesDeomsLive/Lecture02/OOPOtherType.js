var Person = {
    init: function init(name, age) {
        this._name = name;
        this._age = age;
	},
	sayHello: function() {
	    return "Name: " + this._name + ", Age:" + this._age;
	}
}

var Student = {
    init: function init(name, age, grade) {
		this._name = name;
		this._age = age;
        this._grade = grade;
    }
} 

var lidka = Object.create(Student);
lidka.init("Lidka", 22, 2);
console.log(lidka instanceof Person);