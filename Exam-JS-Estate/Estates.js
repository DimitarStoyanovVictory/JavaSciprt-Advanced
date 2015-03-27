function processEstatesAgencyCommands(commands) {

    'use strict';

    Object.prototype.inherits = function(parent) {
        this.prototype = Object.create(parent.prototype);
        this.prototype.constructor = this;
    }

    function IsInteger(variable) {
        return variable % 1 === 0;
    }

    var all = (function() {
        var Estate = (function() {

            var MIN_AREA = 1;
            var MAX_AREA = 10000;

            function Estate(name, area, location, isFurnitured) {
                if (this.constructor === Estate) {
                    throw new Error("Can not create class because it is abstract");
                }

                this.setName(name);
                this.setArea(area);
                this.setLocation(location);
                this.setFurnitured(isFurnitured);
            };

            Estate.prototype.getType = function() {
                return this._type;
            }

            Estate.prototype.getName = function() {
                return this._name;
            }

            Estate.prototype.setName = function(name) {
                if (typeof(name) != "string") {
                    throw new Error("the name should be of type String");
                }
                if (name == "" || name == null) {
                    throw new Error("the name should be not empty string and not null");
                }

                this._name = name;
            }

            Estate.prototype.getArea = function() {
                return this._area;
            }

            Estate.prototype.setArea = function(area) {
                if (!IsInteger(area)) {
                    throw new Error("the area should be integer number");
                }
                if (area < MIN_AREA || area > MAX_AREA) {
                    throw new Error("Out of range, area should be a number in range [1...10000]");
                }

                this._area = area;
            }

            Estate.prototype.getLocation = function() {
                return this._location;
            }

            Estate.prototype.setLocation = function(location) {
                if (typeof (location) != "string") {
                    throw new Error("the location should be of type String");
                }
                if (location == "" || location == null) {
                    throw new Error("the location should be not empty string and not null");
                }

                this._location = location;
            }

            Estate.prototype.getFurnitured = function() {
                return this._isFurnitured;
            }

            Estate.prototype.setFurnitured = function(isFurnitured) {
                if (typeof(isFurnitured) != "boolean") {
                    throw new Error("the isFurnitured should be of type String");
                }

                this._isFurnitured = isFurnitured;
            }

            Estate.prototype.toString = function() {
                return this.getType() + ": Name = " + this.getName() + ", Area = " + this.getArea() + ", Location = " + this.getLocation()
                    + ", Furnitured = " + (this.getFurnitured() ? "Yes" : "No");
            }

            return Estate;
        })();


    var BuildingEstate = (function() {

        var MIN_ROOMS = 1;
        var MAX_ROOMS = 100;

        function BuildingEstate(name, area, location, isFurnitured, rooms, hasElevator) {
            if (this.constructor === BuildingEstate) {
                throw new Error("Cannot create class because it's absctract");
            }

            Estate.apply(this, arguments);
            this.setRooms(rooms);
            this.setHasElevator(hasElevator);
        }

        BuildingEstate.inherits(Estate);

        BuildingEstate.prototype.getRooms = function() {
            return this._rooms;
        };

        BuildingEstate.prototype.setRooms = function(rooms) {
            if (!IsInteger(rooms)) {
                throw new Error("the rooms should be integer number");
            }
            if (rooms < MIN_ROOMS || rooms > MAX_ROOMS) {
                throw new Error("the rooms can't be smaller than 1 and bigger than 100");
            }

            this._rooms = rooms;
        };

        BuildingEstate.prototype.getHasElevator = function() {
            return this._hasElevator;
        };

        BuildingEstate.prototype.setHasElevator = function(hasElevator) {
            if (typeof(hasElevator) != "boolean") {
                throw new Error("the isFurnitured should be of type String");
            }

            this._hasElevator = hasElevator;
        };

        BuildingEstate.prototype.toString = function() {
            return Estate.prototype.toString.call(this) + ", Rooms: " + this.getRooms() + ", Elevator: " + (this.getHasElevator() ? "Yes" : "No");
        }

        return BuildingEstate;
    })();


    var Apartment = (function() {

        function Apartment(name, area, location, isFurnitured, rooms, hasElevator) {
            BuildingEstate.apply(this, arguments);
        }

        Apartment.inherits(BuildingEstate);

        Apartment.prototype._type = "Apartment";

        return Apartment;
    })();


    var Office = (function() {

        function Office(name, area, location, isFurnitured, rooms, hasElevator) {
            BuildingEstate.apply(this, arguments);
        }

        Office.inherits(BuildingEstate);

        Office.prototype._type = "Office";

        return Office;
    })();


    var House = (function() {

        var MIN_FLOORS = 1;
        var MAX_FLOORS = 10;

        function House(name, area, location, isFurnitured, floors) {
            Estate.apply(this, arguments);
            this.setFloors(floors);
        }

        House.inherits(Estate);

        House.prototype._type = "House";

        House.prototype.getFloors = function() {
            return this._floors;
        };

        House.prototype.setFloors = function(floors) {
            if (!IsInteger(floors)) {
                throw new Error("the floors should be integer number");
            }
            if (floors < MIN_FLOORS || floors > MAX_FLOORS) {
                throw new Error("the floors can't be smaller then 1 and bigger then 10");
            }

            this._floors = floors;
        };

        House.prototype.toString = function() {
            return Estate.prototype.toString.call(this) + ", Floors: " + this.getFloors();
        }

        return House;
    })();


    var Garage = (function() {

        var MIN_VALUE = 1;
        var MAX_VALUE = 500;

        function Garage(name, area, location, isFurnitured, width, height) {
            Estate.apply(this, arguments);
            this.setWidth(width);
            this.setHeight(height);
        }

        Garage.inherits(Estate);

        Garage.prototype._type = "Garage";

        Garage.prototype.getWidth = function() {
            return this._width;
        }

        Garage.prototype.setWidth = function(width) {
            if (!IsInteger(width)) {
                throw new Error("the width should be integer number");
            }
            if (width < MIN_VALUE || width > MAX_VALUE) {
                throw new Error("Out of range, width should be a number in range [1...500]");
            }

            this._width = width;
        }

        Garage.prototype.getHeight = function() {
            return this._height;
        }

        Garage.prototype.setHeight = function(height) {
            if (!IsInteger(height)) {
                throw new Error("the height should be integer number");
            }
            if (height < MIN_VALUE || height > MAX_VALUE) {
                throw new Error("Out of range, height should be a number in range [1...500]");
            }

            this._height = height;
        }

        Garage.prototype.toString = function() {
            return Estate.prototype.toString.call(this) + ", Width: " + this.getWidth() + ", Height: " + this.getHeight();
        }

        return Garage;
    })();


    var Offer = (function() {

        function Offer(estate, price) {
            if (this.constructor === Offer) {
                throw new Error("Offer is abstract class you can't implement an object from this class. Implement a class from it's child classes");
            }
            this.setEstate(estate);
            this.setPrice(price);
        }

        Offer.prototype._type = "Offer";

        Offer.prototype.getType = function() {
            return this._type;
        }

        Offer.prototype.getEstate = function() {
            return this._estate;
        }

        Offer.prototype.setEstate = function(estate) {
            if (!(estate instanceof Estate)) {
                throw new Error("Format exeption, variable should be of type Estate");
            }
            this._estate = estate;
        }

        Offer.prototype.getPrice = function() {
            return this._price;
        }

        Offer.prototype.setPrice = function(price) {
            if (!IsInteger(price) || price < 0) {
                throw new Error("Price should be positive integer");
            }
            this._price = price;
        }

        Offer.prototype.toString = function() {
            return this.getType() + ": Estate = " + this.getEstate().getName() + ", Location = "
                + this.getEstate().getLocation() + ", Price = " + this.getPrice();
        }

        return Offer;
    })();


    var RentOffer = (function() {

        function RentOffer(estate, price) {
            Offer.apply(this, arguments);
        }

        RentOffer.inherits(Offer);

        RentOffer.prototype._type = "Rent";

        return RentOffer;
    })();


    var SaleOffer = (function() {

        function SaleOffer(estate, price) {
            Offer.apply(this, arguments);
        }

        SaleOffer.inherits(Offer);

        SaleOffer.prototype._type = "Sale";

        return SaleOffer;
    })();


    var EstatesEngine = (function() {
        var _estates;
        var _uniqueEstateNames;
        var _offers;

        function initialize() {
            _estates = [];
            _uniqueEstateNames = {};
            _offers = [];
        }

        function executeCommand(command) {
            var cmdParts = command.split(' ');
            var cmdName = cmdParts[0];
            var cmdArgs = cmdParts.splice(1);
            switch (cmdName) {
            case 'create':
                return executeCreateCommand(cmdArgs);
            case 'status':
                return executeStatusCommand();
            case 'find-sales-by-location':
                return executeFindSalesByLocationCommand(cmdArgs[0]);
            case 'find-rents-by-location':
                return executeFindRentsByLocationCommand(cmdArgs[0]);
            case 'find-rents-by-price':
                return executeFindRentsByPrice(cmdArgs[0], cmdArgs[1]);
            default:
                throw new Error('Unknown command: ' + cmdName);
            }
        }

        function executeCreateCommand(cmdArgs) {
            var objType = cmdArgs[0];
            switch (objType) {
            case 'Apartment':
                var apartment = new Apartment(cmdArgs[1], Number(cmdArgs[2]), cmdArgs[3],
                    parseBoolean(cmdArgs[4]), Number(cmdArgs[5]), parseBoolean(cmdArgs[6]));
                addEstate(apartment);
                break;
            case 'Office':
                var office = new Office(cmdArgs[1], Number(cmdArgs[2]), cmdArgs[3],
                    parseBoolean(cmdArgs[4]), Number(cmdArgs[5]), parseBoolean(cmdArgs[6]));
                addEstate(office);
                break;
            case 'House':
                var house = new House(cmdArgs[1], Number(cmdArgs[2]), cmdArgs[3],
                    parseBoolean(cmdArgs[4]), Number(cmdArgs[5]));
                addEstate(house);
                break;
            case 'Garage':
                var garage = new Garage(cmdArgs[1], Number(cmdArgs[2]), cmdArgs[3],
                    parseBoolean(cmdArgs[4]), Number(cmdArgs[5]), Number(cmdArgs[6]));
                addEstate(garage);
                break;
            case 'RentOffer':
                var estate = findEstateByName(cmdArgs[1]);
                var rentOffer = new RentOffer(estate, Number(cmdArgs[2]));
                addOffer(rentOffer);
                break;
            case 'SaleOffer':
                estate = findEstateByName(cmdArgs[1]);
                var saleOffer = new SaleOffer(estate, Number(cmdArgs[2]));
                addOffer(saleOffer);
                break;
            default:
                throw new Error('Unknown object to create: ' + objType);
            }
            return objType + ' created.';
        }

        function parseBoolean(value) {
            switch (value) {
            case "true":
                return true;
            case "false":
                return false;
            default:
                throw new Error("Invalid boolean value: " + value);
            }
        }

        function findEstateByName(estateName) {
            for (var i = 0; i < _estates.length; i++) {
                if (_estates[i].getName() == estateName) {
                    return _estates[i];
                }
            }
            return undefined;
        }

        function addEstate(estate) {
            if (_uniqueEstateNames[estate.getName()]) {
                throw new Error('Duplicated estate name: ' + estate.getName());
            }
            _uniqueEstateNames[estate.getName()] = true;
            _estates.push(estate);
        }

        function addOffer(offer) {
            _offers.push(offer);
        }

        function executeStatusCommand() {
            var result = '', i;
            if (_estates.length > 0) {
                result += 'Estates:\n';
                for (i = 0; i < _estates.length; i++) {
                    result += "  " + _estates[i].toString() + '\n';
                }
            } else {
                result += 'No estates\n';
            }

            if (_offers.length > 0) {
                result += 'Offers:\n';
                for (i = 0; i < _offers.length; i++) {
                    result += "  " + _offers[i].toString() + '\n';
                }
            } else {
                result += 'No offers\n';
            }

            return result.trim();
        }

        function executeFindSalesByLocationCommand(location) {
            if (!location) {
                throw new Error("Location cannot be empty.");
            }
            var selectedOffers = _offers.filter(function(offer) {
                return offer.getEstate().getLocation() === location &&
                    offer instanceof SaleOffer;
            });
            selectedOffers.sort(function(a, b) {
                return a.getEstate().getName().localeCompare(b.getEstate().getName());
            });
            return formatQueryResults(selectedOffers);
        }

        function executeFindRentsByLocationCommand(location) {
            if (!location) {
                throw new Error("Location cannot be empty.");
            }
            var selectedOffers = _offers.filter(function(offer) {
                return offer.getEstate().getLocation() === location &&
                    offer instanceof RentOffer;
            });
            selectedOffers.sort(function(a, b) {
                return a.getEstate().getName().localeCompare(b.getEstate().getName());
            });
            return formatQueryResults(selectedOffers);
        }

        function executeFindRentsByPrice(minPrice, maxPrice) {
            if (minPrice == undefined || maxPrice == undefined) {
                throw new Error("maximum and minimum variables must not be undefined");
            } else if ((Number(minPrice) != 0 && Number(maxPrice) != 0) && (!Number(minPrice) || !Number(maxPrice))) {
                throw new Error("maximum and minimum variables must be of type number");
            } else if (!IsInteger(Number(minPrice)) || !IsInteger(Number(maxPrice))) {
                throw new Error("maximum and minimum variables must be integer");
            } else if (Number(minPrice) < 0 || Number(maxPrice) < 0) {
                throw new Error("maximum and minimum variables must be positive");
            }

            var selectedOffers = _offers.filter(function(offer) {
                return offer.getPrice() <= maxPrice && offer.getPrice() >= minPrice &&
                    offer instanceof RentOffer;
            });

            selectedOffers.sort(function(a, b) {
                if (a.getPrice() == b.getPrice()) {
                    return a.getEstate().getName().localeCompare(b.getEstate().getName());
                } else {
                    return a.getPrice() - b.getPrice();
                }
            });

            return formatQueryResults(selectedOffers);
        }

        function formatQueryResults(offers) {
            var result = '';
            if (offers.length == 0) {
                result += 'No Results\n';
            } else {
                result += 'Query Results:\n';
                for (var i = 0; i < offers.length; i++) {
                    var offer = offers[i];
                    result += '  [Estate: ' + offer.getEstate().getName() +
                        ', Location: ' + offer.getEstate().getLocation() +
                        ', Price: ' + offer.getPrice() + ']\n';
                }
            }
            return result.trim();
        }

        return {
            initialize: initialize,
            executeCommand: executeCommand
        };
		}());
	})();


// Process the input commands and return the results
    var results = '';
    EstatesEngine.initialize();
    commands.forEach(function(cmd) {
        if (cmd != '') {
            try {
                var cmdResult = EstatesEngine.executeCommand(cmd);
                results += cmdResult + '\n';
            } catch (err) {
                //console.log(err);
                results += 'Invalid command.\n';
            }
        }
    });
    return results.trim();
}

// ------------------------------------------------------------
// Read the input from the console as array and process it
// Remove all below code before submitting to the judge system!
// ------------------------------------------------------------

(function() {
    var arr = [];
    if (typeof (require) == 'function') {
        // We are in node.js --> read the console input and process it
        require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        }).on('line', function(line) {
            arr.push(line);
        }).on('close', function() {
            console.log(processEstatesAgencyCommands(arr));
        });
    }
})();
