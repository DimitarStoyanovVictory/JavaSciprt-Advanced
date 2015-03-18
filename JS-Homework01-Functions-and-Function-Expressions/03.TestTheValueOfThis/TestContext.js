function testContext() {
	console.log(this);
	function inner() {
	    testContext.call({ name: "Misho" });
	}

    return inner;
}

testContext.call({ age: 26 });

var obj = new testContext();

obj.call();

