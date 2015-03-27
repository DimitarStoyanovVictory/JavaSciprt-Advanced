function Rect(width, height) {
    var _this = this;
	this.width = width;
    this.height = height;

	this.calculateArea = function() {
		console.log(_this);
	    return _this.width * _this.height;
	}
}

var rect = new Rect(100, 200);

var rectangleCalcArea = rect.calculateArea;
console.log(rectangleCalcArea());