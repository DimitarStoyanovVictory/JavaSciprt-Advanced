function Animal(name) {
	if (!(this instanceof arguments.callee)) {
		return new arguments.callee(name);
	}	;
	
	this._name = name;

};

var dog = Animal("Ani");

console.log(dog instanceof Animal);