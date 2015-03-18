function printArgsInfo() {
	for (var index = 0; index < arguments.length; index++) {
		if (arguments[index] == "" && typeof (arguments[index]) == "string") {
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

printArgsInfo.call();
printArgsInfo.call(undefined , null, undefined, "", 0, [], {});

printArgsInfo.apply();
printArgsInfo.apply(null, [null, undefined, "", 0, [], {}]);