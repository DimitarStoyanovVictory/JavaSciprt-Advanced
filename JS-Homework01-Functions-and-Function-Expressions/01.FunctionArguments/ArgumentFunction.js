function printArgsInfo() {
	for (var index = 0; index < arguments.length; index++) {
	    if (arguments[index] == "" && typeof(arguments[index]) == "string") {
			console.log("(string)");
		} else if (arguments[index] == "" && arguments[index].constructor === Array) {
	        console.log("(array)");
	    } else if (arguments[index] != null && arguments[index].constructor === Array) {
			console.log(arguments[index] + " (array)");
	    } else {
			console.log(arguments[index] + " (" + typeof (arguments[index]) + ")");
	    }
    }
}

printArgsInfo(2, 3, 2.5, -110.5564, false);
printArgsInfo(null, undefined, "", 0, [], {});
printArgsInfo([1, 2], ["string", "array"], ["single value"]);
printArgsInfo("some string", [1, 2], ["string", "array"], ["mixed", 2, false, "array"], { name: "Peter", age: 20 });
printArgsInfo([[1, [2, [3, [4, 5]]]], ["string", "array"]]);