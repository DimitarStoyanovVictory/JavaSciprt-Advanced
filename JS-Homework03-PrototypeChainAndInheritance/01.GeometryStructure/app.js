'use strict';

Object.prototype.inherits = function(parent) {
	this.prototype = Object.create(parent.prototype);
    this.prototype.constructor = this;
}

function Point(x, y) {
	this.x = x;
    this.y = y;
}

var Form = (function () {


	function Shape(color, x, y) {
	    if (this.constructor === Shape) {
	        throw new Error("Shape is abstract method");
	    }
		this._color = color;
        this._point = new Point(x, y);
	}

	
	Shape.prototype.toString = function() {
	    return "Color: " + this._color + ", Ax: " + this._point.x + ", Ay: " + this._point.y;
	}

	
	function Circle(color, Ox, Oy, r) {
		Circle.inherits(Shape);
		Shape.apply(this, arguments);
        this._r = r;
	}

	
	Circle.prototype.toString = function() {
		return "Color: " + this._color + ", Ox: " + this._point.x + ", Oy: " + this._point.y + ", radius: " + this._r;
	}

	
	function Rectangle(color, Ax, Ay, width, height) {
		Rectangle.inherits(Shape);
		Shape.apply(this, arguments);
		this._width = width;
        this._height = height;
	}
	

	Rectangle.prototype.toString = function() {
	    return Shape.prototype.toString.call(this) + ", width: " + this._width +  ", height: " + this._height;
	}


    function Triangle(color, Ax, Ay, Bx, By, Cx, Cy) {
		Triangle.inherits(Shape);
		Shape.apply(this, arguments);
		this._Bx = Bx;
		this._By = By;
		this._Cx = Cx;
        this._Cy = Cy;
	}
	
	
	Triangle.prototype.toString = function() {
		return Shape.prototype.toString.call(this) + ", Bx: " + this._Bx + ", By: " + this._By + ", Cx: " + this._Cx + ", Cy: " + this._Cy;
	}

    function Line(color, Ax, Ay, Bx, By) {
		Line.inherits(Shape);
		Shape.apply(this, arguments);
		this._Bx = Bx;
        this._By = By;
	}
	
	Line.prototype.toString = function () {
		return Shape.prototype.toString.call(this) + ", Bx: " + this._Bx + ", By: " + this._By + ", Cx: " + this._Cx + ", Cy: " + this._Cy;
	}


    function Segment(color, Ax, Ay, Bx, By) {
		Segment.inherits(Shape);	
		Shape.apply(this, arguments);
		this._Bx = Bx;
		this._By = By;
	}
	
	Segment.prototype.toString = function () {
	    return Shape.prototype.toString.call(this) + ", Bx: " + this._Bx + ", By: " + this._By;
	}

    return {
        Shape: Shape,
        Circle: Circle,
        Rectangle: Rectangle,
        Triangle: Triangle,
        Line: Line,
        Segment: Segment
    }
})();


var circle = new Form.Circle("#AB000", 5, 10, 15, 20);
console.log(circle.toString());

var rectangle = new Form.Rectangle("#BC123", 5, 10, 15, 20);
console.log(rectangle.toString());

var triangle = new Form.Triangle("#AB1236", 1, 2, 3, 4, 5, 6);
console.log(triangle.toString());

var line = new Form.Line("AB1234", 2, 4, 5, 7);
console.log(line.toString());

var segment = new Form.Segment("BV1235", 5, 10, 15, 20);
console.log(segment.toString());
