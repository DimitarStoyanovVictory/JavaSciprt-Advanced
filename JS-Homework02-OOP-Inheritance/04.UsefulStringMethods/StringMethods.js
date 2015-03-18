
String.prototype.startsWith = function (string) {
	if (this.substring(0, string.length) === string) {
	    return true;
	} else {
	    return false;
	}
}

String.prototype.endsWith = function(string) {
    if (this.substring(this.length - string.length, this.length) === string) {
        return true;
    } else {
        return false;
    }
}

String.prototype.left = function (count) {
    if (this.length <= count) {
        return "" + this;
	} else {
		return "" + this.substring(0, count);    
    }
}

String.prototype.right = function (count) {
	if (this.length <= count) {
	    return "" + this;
	} else {
		return "" + this.substring(this.length - count, this.length);
    }
}

function NewString(count, character) {
	var string = "";

    if (character != undefined) {
		for (var i = 0; i < count; i++) {
			string += character;
		}
	} else {
		for (var i = 0; i < count; i++) {
			string += " ";
		}
    }
	
	return string;
}

String.prototype.padLeft = function(count) {
	if (count <= this.length) {
		return "" + this;
	} else {
	    return "" + NewString(count - this.length) + this;
	}
}

String.prototype.padLeft = function(count, character) {
	if (count <= this.length) {
		return "" + this;
	} else {
		return "" + NewString(count - this.length, character) + this;
	}
}

String.prototype.padRight = function (count) {
	if (count <= this.length) {
		return "" + this;
	} else {
		return "" + this + NewString(count - this.length);
	}
}

String.prototype.padRight = function (count, character) {
	if (count <= this.length) {
		return "" + this;
	} else {
		return "" + this + NewString(count - this.length, character);
	}
}

String.prototype.repeat = function(count) {
    return NewString(count, this);
}

var example = "This is an example string used only for demonstration purposes.";
console.log(example.startsWith("This"));
console.log(example.startsWith("this"));
console.log(example.startsWith("other"));
console.log();

var example1 = "This is an example string used only for demonstration purposes.";
console.log(example1.endsWith("poses."));
console.log(example1.endsWith("example"));
console.log(example1.startsWith("something else"));
console.log();

var example2 = "This is an example string used only for demonstration purposes.";
console.log(example2.left(9));
console.log(example2.left(90));
console.log();

var example3 = "This is an example string used only for demonstration purposes.";
console.log(example3.right(9));
console.log(example3.right(90));
console.log();

// Combinations must also work
var example4 = "abcdefgh";
console.log(example4.left(5).right(2));
console.log();

var hello = "hello";
console.log(hello.padLeft(5));
console.log(hello.padLeft(10));
console.log(hello.padLeft(5, "."));
console.log(hello.padLeft(10, "."));
console.log(hello.padLeft(2, "."));

var hello2 = "hello";
console.log(hello2.padRight(5));
console.log(hello2.padRight(10));
console.log(hello2.padRight(5, "."));
console.log(hello2.padRight(10, "."));
console.log(hello2.padRight(2, "."));

var character = "*";
console.log(character.repeat(5));
// Alternative syntax
console.log("~".repeat(3));

// Another combination
console.log("*".repeat(5).padLeft(10, "-").padRight(15, "+"));
