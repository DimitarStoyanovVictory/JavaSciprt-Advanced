var Person = {
	init: function init(name, age) {
		this._name = name;
		this._age = age;
	},
	sayHello: function () {
		return "Name: " + this._name + ", Age:" + this._age;
	}
}

//var Student = {
//	init: function init(name, age, grade) {
//		this._name = name;
//		this._age = age;
//		this._grade = grade;
//	}
//}

var Student = Person.extend({
    init: function init(name, age, grade) {
        this._super.init(name, age);
        this._grade = grade;

        return this;
	},
	sayHello: function() {
	    return this._super.sayHello() + "I am a child";
	}
});

var lidka = Object.create(Student).init("Lidka", 22, 2);
console.log(lidka._name);

console.log(lidka instanceof Student);