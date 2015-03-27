Array.prototype.sum = function() {
	var result = 0;

    this.forEach(function(item) {
        result += item;
	});

    return result;
}

var array = [1, 2, 3, 4, 5, 6];
console.log(array.sum());