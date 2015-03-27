var Destination = (function () {
	function Destination(location, landmark) {
		this.setLocation(location);
		this.setLandmark(landmark);
	}
	
	Destination.prototype.getLocation = function () {
		return this._location;
	}
	
	Destination.prototype.setLocation = function (location) {
		if (location === undefined || location === "") {
			throw new Error("Location cannot be empty or undefined.");
		}
		this._location = location;
	}
	
	Destination.prototype.getLandmark = function () {
		return this._landmark;
	}
	
	Destination.prototype.setLandmark = function (landmark) {
		if (landmark === undefined || landmark == "") {
			throw new Error("Landmark cannot be empty or undefined.");
		}
		this._landmark = landmark;
	}
	
	Destination.prototype.toString = function () {
		return this.constructor.name + ": " +
                    "location=" + this.getLocation() +
                    ",landmark=" + this.getLandmark();
	}
	
	return Destination;
}());

var x = new Destination("Sofia", "Levski-Pametnik");
console.log(x.setLocation);