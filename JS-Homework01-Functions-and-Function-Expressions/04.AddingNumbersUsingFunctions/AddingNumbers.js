//var value = 0;

//function add(num) {
//    value += num;
//    console.log(value);

//	return add;
//}

//var addTwo = add(2);
//console.log(addTwo(3)(4));
function add(a) {
	
	var sum = a;
	
	function f(b) {
		sum += b;
		return f;
	}
	
	f.toString = function () { return sum }
	
	return f;
}

console.log(+add(1));
console.log(+add(2)(3));
console.log(+add(1)(1)(1)(1)(1));
console.log(+add(1)(0)(-1)(-1));