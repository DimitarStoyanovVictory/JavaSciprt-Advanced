//function traverse(selector) {

//	var x = document.getElementsByClassName(selector);
//    console.log(x);
//}

//traverse('eagle');

function Animal(name) {
    console.log("Hi " + name + " !");
}

Animal.move = "move";

var dog = Animal("Pesho");
var cat = new Animal("Gosho");

console.log(typeof(dog));
console.log(typeof(cat));

