require('./libs/simpleInheritance.js');

(function () {
	var Point = Class.extend({
		init: function (x, y) {
			this._x = x;
			this._y = y;
		},
		
		toString: function () {
			return "{ X: " + this._x + ", Y: " + this._y + " }";
		}
	});
	
	var Shape = Class.extend({
		init: function (Point, color) {
			this._point = Point;
			this.color(color);
		},
		
		color: function (value) {
			if (value) {
				if (!/^#[0-9abcdef]{6}$/.test(value)) {
					throw Error("Invalid hexademical color.");
				}
				this._color = value;
			}
			else {
				return this._color;
			}
		},
		
		toString: function () {
			return this._point.toString() + ", Color: " + this.color();
		}
	});
	
	var Circle = Shape.extend({
		init: function (Point, radius, color) {
			this._super(Point, color);
			this.radius(radius);
		},
		
		radius: function (value) {
			if (value) {
				if (value < 0) {
					throw Error("Circle radius cannot be negative");
				}
				
				this._radius = value;
			} else {
				return this._radius;
			}
		},
		
		toString: function () {
			return "Circle - Center: " + this._super().toString() + ", Radius: " + this.radius();
		}
	});
	
	var Rectangle = Shape.extend({
		init: function (point, width, height, color) {
			this._super(point, color);
			this.width(width);
			this.height(height);
		},
		
		width: function (value) {
			if (value) {
				if (value < 0) {
					throw Error("Width cannot be negative.")
				}
				
				this._width = value;
			}
			else {
				return this._width;
			}
		},
		
		height: function (value) {
			if (value) {
				if (value < 0) {
					throw Error("Height cannot be negative.")
				}
				
				this._height = value;
			}
			else {
				return this._height;
			}
		},
		
		toString: function () {
			return "Rectangle - Top left corner: " + this._super().toString() + ", Width: " + this.width() + ", Height: " + this.height();
		}
	});
	
	var Triangle = Shape.extend({
		init: function (pointA, pointB, pointC, color) {
			this._super(pointA, color);
			this._pointB = pointB;
			this._pointC = pointC;
		},
		
		toString: function () {
			return "Triangle - Point A: " + this._super().toString() + ", Point B: " + this._pointB.toString() + ", Point C: " + this._pointC.toString();
		}
	});
	
	var Line = Shape.extend({
		init: function (pointA, pointB, color) {
			this._super(pointA, color);
			this._pointB = pointB;
		},
		
		toString: function () {
			return "Line - Point A: " + this._super().toString() + ", Point B: " + this._pointB.toString();
		}
	});
	
	var Segment = Shape.extend({
		init: function (pointA, pointB, color) {
			this._super(pointA, color);
			this._pointB = pointB;
		},
		
		toString: function () {
			return "Segment - Point A: " + this._super().toString() + ", Point B: " + this._pointB.toString();
		}
	});
	
	var circle = new Circle(new Point(0, 0), 2, "#00ff00");
	console.log(circle.toString());
	
	var rectangle = new Rectangle(new Point(2, 4), 4, 6, "#ff0000");
	console.log(rectangle.toString());
	
	var triangle = new Triangle(new Point(0, 0), new Point(4, 0), new Point(2, 2), "#0000ff");
	console.log(triangle.toString());
	
	var line = new Line(new Point(0, 0), new Point(4, 0), "#0000ff");
	console.log(line.toString());
	
	var segment = new Segment(new Point(0, 0), new Point(4, 0), "#0000ff");
	console.log(segment.toString());
}());
