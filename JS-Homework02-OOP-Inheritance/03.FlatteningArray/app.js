Object.prototype.flatten = function () {
	var inputArray = this;
	var outputArray = [];
	refactureArray(inputArray);
	
	function refactureArray(inputArray) {
		for (var index = 0; index < inputArray.length; index++) {
			if (inputArray[index] instanceof Array) {
				//this is the great trick!
				refactureArray(inputArray[index]);
					
			} else {
				outputArray.push(inputArray[index]);
			}
		}
	}
	
	return outputArray;
}

var array = [1, 2, 3, 4];
console.log(array.flatten());

var array2 = [1, 2, [3, 4], [5, 6]];
console.log(array2.flatten());

var array3 = [0, ["string", "values"], 5.5, [[1, 2, true], [3, 4, false]], 10];
console.log(array3.flatten());