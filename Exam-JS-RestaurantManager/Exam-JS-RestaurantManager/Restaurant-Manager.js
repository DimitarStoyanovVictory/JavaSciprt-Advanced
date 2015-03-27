function processRestaurantManagerCommands(commands) {
	'use strict';
	
	var RestaurantEngine = (function () {
		var _restaurants, _recipes;
		
		Object.prototype.extends = function (parent) {
			this.prototype = Object.create(parent.prototype);
			this.prototype.constructor = this;
		}
		
		function initialize() {
			_restaurants = [];
			_recipes = [];
		}

	    function ResultMethod(name, price, quantity, unit, calories, timeToPrepeare) {
	        return "==  " + name + " == $" + price.toFixed(2) + "\n" +
	            "Per serving: " + quantity + " " + unit + ", " +
	            calories + " kcal\n" + "Ready in " + timeToPrepeare + " minutes\n";
	    }

	    var Restaurant = (function() {

	        function Restaurant(name, location) {
	            this.setName(name);
				this.setLocation(location);
	            this.setRecipes();
	        }

			Restaurant.prototype.getName = function () {
	            return this._name;
			}

			Restaurant.prototype.setName = function (name) {
	            if (name == null || name == "" || typeof(name) != "string") {
	                throw new Error("name must be not empty or null string");
	            }
	            this._name = name;
	        }

			Restaurant.prototype.getLocation = function () {
	            return this._location;
	        }

			Restaurant.prototype.setLocation = function (location) {
	            if (location == null || location == "" || typeof(location) != "string") {
	                throw new Error("location must not be empty or null string");
	            }
	            this._location = location;
			}

			Restaurant.prototype.getRecipes = function() {
			    return this._recipes;
			}

	        Restaurant.prototype.setRecipes = function() {
	            this._recipes = [];
			};

			Restaurant.prototype.addRecipe = function (recipe) {
			    return this.getRecipes().push(recipe);
			}
			
			Restaurant.prototype.removeRecipe = function (recipe) {
			    var index = this.getRecipes().indexOf(recipe);
			    return this.getRecipes().splice(index, 1);
			}
			
			Restaurant.prototype.printRestaurantMenu = function () {
				
				if (this.getRecipes().length === 0) {
					return "***** " + this.getName() + " - " + this.getLocation() + " *****\n" + "No recipes... yet\n";
				}
				else {
					var result = "***** " + this.getName() + " - " + this.getLocation() + " *****\n";

					var countDrinks = 0;
					for (var index = 0; index < this.getRecipes().length; index++) {
						
						if (this.getRecipes()[index].constructor === Drink) {
							
							countDrinks++;
							if (countDrinks == 1) {
								result += "~~~~~ DRINKS ~~~~~\n";
							}
							
							result += ResultMethod(this.getRecipes()[index].getName(), this.getRecipes()[index].getPrice(),
												   this.getRecipes()[index].getQuantity(), this.getRecipes()[index].getUnit,			
												   this.getRecipes()[index].getCalories(), this.getRecipes()[index].getTimeToPrepare());

						    result += "Carbonated: " + (this.getRecipes()[index].getIsCarbonated() ? "yes" : "no") + "\n";
						}
					}
					
					var countSalads = 0;
					for (var index = 0; index < this.getRecipes().length; index++) {
						
						if (this.getRecipes()[index].constructor === Salad) {
							
							countSalads++;
							if (countSalads == 1) {
								result += "~~~~~ SALADS ~~~~~\n";
							}
							
							if (this.getRecipes()[index].getIsVegan()) {
								result += "[VEGAN] ";
							}

							result += ResultMethod(this.getRecipes()[index].getName(), this.getRecipes()[index].getPrice(),
												   this.getRecipes()[index].getQuantity(), this.getRecipes()[index].getUnit,
												   this.getRecipes()[index].getCalories(), this.getRecipes()[index].getTimeToPrepare());

							result += "Contains pasta: " + (this.getRecipes()[index].getContainsPasta() ? "yes" : "no") + "\n";
						}
					}
					
					var countMainCourses = 0;
					for (var index = 0; index < this.getRecipes().length; index++) {
						
						if (this.getRecipes()[index].constructor === MainCourse) {
							
							countMainCourses++;
							if (countMainCourses == 1) {
								result += "~~~~~ MAIN COURSES ~~~~~\n";
							}
							
							if (this.getRecipes()[index].getIsVegan()) {
								result += "[VEGAN] ";
							}

							result += ResultMethod(this.getRecipes()[index].getName(), this.getRecipes()[index].getPrice(),
												   this.getRecipes()[index].getQuantity(), this.getRecipes()[index].getUnit,
												   this.getRecipes()[index].getCalories(), this.getRecipes()[index].getTimeToPrepare());

						    result += "Type: " + this.getRecipes()[index].getType() + "\n";
						}
					}
					
					var countMainCourses = 0;
					for (var index = 0; index < this.getRecipes().length; index++) {
						
						if (this.getRecipes()[index].constructor === Dessert) {
							
							countMainCourses++;
							if (countMainCourses == 1) {
								result += "~~~~~ DESSERTS ~~~~~\n";
							}

							if (!this.getRecipes()[index].getHasSuggar()) {
								result += "[NO SUGAR] ";
							}
							
							if (this.getRecipes()[index].getIsVegan()) {
								result += "[VEGAN] ";
							}

						    result += ResultMethod(this.getRecipes()[index].getName(), this.getRecipes()[index].getPrice(),
												   this.getRecipes()[index].getQuantity(), this.getRecipes()[index].getUnit,
												   this.getRecipes()[index].getCalories(), this.getRecipes()[index].getTimeToPrepare());
							
						}
					}

				    return result;
				}
			}
				
	        return Restaurant;
		})();
		
	    var Recipe = (function() {

	        function Recipe(name, price, calories, quantity, timeToPrepare) {
	            if (this.constructor === Recipe) {
	                throw new Error("Can't create class because it is abstract");
	            }
	            this.setName(name);
	            this.setPrice(price);
	            this.setCalories(calories);
	            this.setQuantity(quantity);
	            this.setTimeToPrepare(timeToPrepare);
	        }

			Recipe.prototype.getType = function() {
	            return this._type;
	        }

			Recipe.prototype.setType = function(type) {
	            if (type == null || type == "" || typeof(type) != "string") {
	                throw new Error("type must not be empty or null string");
	            }
	            this._type = type;
			}
			
			Recipe.prototype.getName = function () {
				return this._name;
			}
			
			Recipe.prototype.setName = function (name) {
				if (name == null || name == "" || typeof (name) != "string") {
					throw new Error("name must be not empty or null string");
				}
				this._name = name;
			}

			Recipe.prototype.getPrice = function() {
	            return this._price;
	        }

			Recipe.prototype.setPrice = function(price) {
	            if (price < 0 || typeof(price) != "number") {
	                throw new Error("price must be positive number");
	            }
	            this._price = price;
	        }

			Recipe.prototype.getCalories = function() {
	            return this._calories;
	        }

			Recipe.prototype.setCalories = function(calories) {
	            if (calories < 0 || typeof(calories) != "number") {
	                throw new Error("calories must be positive number");
	            }
	            this._calories = calories;
	        }

			Recipe.prototype.getQuantity = function() {
	            return this._quantity;
	        }

			Recipe.prototype.setQuantity = function(quantity) {
	            if (quantity < 0 || typeof(quantity) != "number") {
	                throw new Error("quantity must be positive number");
	            }
	            this._quantity = quantity;
	        }

			Recipe.prototype.getTimeToPrepare = function() {
	            return this._timeToPrepare;
	        }

			Recipe.prototype.setTimeToPrepare = function(timeToPrepare) {
	            if (Number(timeToPrepare) < 0 || typeof(Number(timeToPrepare)) != "number") {
	                throw new Error("timeToPrepare must be positive number");
	            }
	            this._timeToPrepare = timeToPrepare;
			}

	        Recipe.prototype.toggleVegan = function() {
	            return this._isVegan = !this._isVegan;
	        };

	        return Recipe;
	    })();

	    var Drink = (function() {

	        function Drink(name, price, calories, quantity, timeToPrepare, isCarbonated) {
	            Recipe.apply(this, arguments);
	            this.setIsCarbonated(isCarbonated);
	        }

	        Drink.extends(Recipe);

	        Drink.prototype.getUnit = "ml";

			Drink.prototype.getIsCarbonated = function() {
	            return this._isCarbonated;
	        }

			Drink.prototype.setIsCarbonated = function(isCarbonated) {
	            if (typeof (isCarbonated) != "boolean") {
	                throw new Error("isCarbonated must be boolean type");
	            }
	            this._isCarbonated = isCarbonated;
	        }

	        return Drink;
	    })();

	    var Meal = (function() {

			function Meal(name, price, calories, quantity, timeToPrepare) {
				Recipe.apply(this, arguments);
	        }

			Meal.extends(Recipe);

			Meal.prototype.getUnit = "g";
			
			Meal.prototype.getIsVegan = function () {
				return this._isVegan;
			}
			
			Meal.prototype.setIsVegan = function (isVegan) {
				if (typeof(isVegan) != "boolean") {
					throw new Error("isVegan must be boolean type");
				}
				this._isVegan = isVegan;
			}

	        return Meal;

	    })();

	    var Dessert = (function() {

			function Dessert(name, price, calories, quantity, timeToPrepare, isVegan) {
				this.setIsVegan(true);
			    this.setHasSuggar(true);
	            Recipe.apply(this, arguments);
				this.setIsVegan(isVegan);
	        }

			Dessert.extends(Meal);
			
			Dessert.prototype.getHasSuggar = function () {
				return this._withSugar;
			}
			
			Dessert.prototype.setHasSuggar = function (withSugar) {
				if (typeof (withSugar) != "boolean") {
					throw new Error("isVegan must be boolean type");
				}
				this._withSugar = withSugar;
			}
			
			Dessert.prototype.toggleSugar = function() {
			    if (this.getHasSuggar()) {
			        this.setHasSuggar(false);
			    } else {
			        this.setHasSuggar(true);
			    }
			}

	        return Dessert;
	    })();

	    var MainCourse = (function() {

			function MainCourse(name, price, calories, quantity, timeToPrepare, isVegan, type) {
				this.setIsVegan(true);
	            Recipe.apply(this, arguments);
	            this.setIsVegan(isVegan);
	            this.setType(type);
	        }

			MainCourse.extends(Meal);
			
			MainCourse.prototype.getType = function() {
			    return this._type;
			}

			MainCourse.prototype.setType = function(type) {
	            if (type == null || type == "" || typeof (type) != "string") {
	                throw new Error("type must not be empty or null string");
	            }
	            this._type = type;
			}

	        return MainCourse;
	    })();

	    var Salad = (function() {

			function Salad(name, price, calories, quantity, timeToPrepare, containsPasta) {
				this.setIsVegan(true);
	            Recipe.apply(this, arguments);
				this.setContainsPasta(containsPasta);
				this.getIsVegan("");
	        }

	        Salad.extends(Meal);

			Salad.prototype.getContainsPasta = function() {
	            return this._containsPasta;
	        }

			Salad.prototype.setContainsPasta = function(containsPasta) {
	            if (typeof(containsPasta) != "boolean") {
	                throw new Error("containsPasta must be boolean type");
	            }
	            this._containsPasta = containsPasta;
			}

	        return Salad;
	    })();
		
		var Command = (function () {
			
			function Command(commandLine) {
				this._params = new Array();
				this.translateCommand(commandLine);
			}
			
			Command.prototype.translateCommand = function (commandLine) {
				var self, paramsBeginning, name, parametersKeysAndValues;
				self = this;
				paramsBeginning = commandLine.indexOf("(");
				
				this._name = commandLine.substring(0, paramsBeginning);
				name = commandLine.substring(0, paramsBeginning);
				parametersKeysAndValues = commandLine
                    .substring(paramsBeginning + 1, commandLine.length - 1)
                    .split(";")
                    .filter(function (e) { return true });
				
				parametersKeysAndValues.forEach(function (p) {
					var split = p
                        .split("=")
                        .filter(function (e) { return true; });
					self._params[split[0]] = split[1];
				});
			}
			
			return Command;
		}());
		
		function createRestaurant(name, location) {
			_restaurants[name] = new Restaurant(name, location);
			return "Restaurant " + name + " created\n";
		}
		
		function createDrink(name, price, calories, quantity, timeToPrepare, isCarbonated) {
			_recipes[name] = new Drink(name, price, calories, quantity, timeToPrepare, isCarbonated);
			return "Recipe " + name + " created\n";
		}
		
		function createSalad(name, price, calories, quantity, timeToPrepare, containsPasta) {
			_recipes[name] = new Salad(name, price, calories, quantity, timeToPrepare, containsPasta);
			return "Recipe " + name + " created\n";
		}
		
		function createMainCourse(name, price, calories, quantity, timeToPrepare, isVegan, type) {
			_recipes[name] = new MainCourse(name, price, calories, quantity, timeToPrepare, isVegan, type);
			return "Recipe " + name + " created\n";
		}
		
		function createDessert(name, price, calories, quantity, timeToPrepare, isVegan) {
			_recipes[name] = new Dessert(name, price, calories, quantity, timeToPrepare, isVegan);
			return "Recipe " + name + " created\n";
		}
		
		function toggleSugar(name) {
			var recipe;
			
			if (!_recipes.hasOwnProperty(name)) {
				throw new Error("The recipe " + name + " does not exist");
			}
			recipe = _recipes[name];
			
			if (recipe instanceof Dessert) {
				recipe.toggleSugar();
				return "Command ToggleSugar executed successfully. New value: " + recipe._withSugar.toString().toLowerCase() + "\n";
			} else {
				return "The command ToggleSugar is not applicable to recipe " + name + "\n";
			}
		}
		
		function toggleVegan(name) {
			var recipe;
			
			if (!_recipes.hasOwnProperty(name)) {
				throw new Error("The recipe " + name + " does not exist");
			}
			
			recipe = _recipes[name];
			if (recipe instanceof Meal) {
				recipe.toggleVegan();
				return "Command ToggleVegan executed successfully. New value: " +
                    recipe._isVegan.toString().toLowerCase() + "\n";
			} else {
				return "The command ToggleVegan is not applicable to recipe " + name + "\n";
			}
		}
		
		function printRestaurantMenu(name) {
			var restaurant;
			
			if (!_restaurants.hasOwnProperty(name)) {
				throw new Error("The restaurant " + name + " does not exist");
			}
			
			restaurant = _restaurants[name];
			return restaurant.printRestaurantMenu();
		}
		
		function addRecipeToRestaurant(restaurantName, recipeName) {
			var restaurant, recipe;
			
			if (!_restaurants.hasOwnProperty(restaurantName)) {
				throw new Error("The restaurant " + restaurantName + " does not exist");
			}
			if (!_recipes.hasOwnProperty(recipeName)) {
				throw new Error("The recipe " + recipeName + " does not exist");
			}
			
			restaurant = _restaurants[restaurantName];
			recipe = _recipes[recipeName];
			restaurant.addRecipe(recipe);
			return "Recipe " + recipeName + " successfully added to restaurant " + restaurantName + "\n";
		}
		
		function removeRecipeFromRestaurant(restaurantName, recipeName) {
			var restaurant, recipe;
			
			if (!_recipes.hasOwnProperty(recipeName)) {
				throw new Error("The recipe " + recipeName + " does not exist");
			}
			if (!_restaurants.hasOwnProperty(restaurantName)) {
				throw new Error("The restaurant " + restaurantName + " does not exist");
			}
			
			restaurant = _restaurants[restaurantName];
			recipe = _recipes[recipeName];
			restaurant.removeRecipe(recipe);
			return "Recipe " + recipeName + " successfully removed from restaurant " + restaurantName + "\n";
		}
		
		function executeCommand(commandLine) {
			var cmd, params, result;
			cmd = new Command(commandLine);
			params = cmd._params;
			
			switch (cmd._name) {
				case 'CreateRestaurant':
					result = createRestaurant(params["name"], params["location"]);
					break;
				case 'CreateDrink':
					result = createDrink(params["name"], parseFloat(params["price"]), parseInt(params["calories"]),
                        parseInt(params["quantity"]), params["time"], parseBoolean(params["carbonated"]));
					break;
				case 'CreateSalad':
					result = createSalad(params["name"], parseFloat(params["price"]), parseInt(params["calories"]),
                        parseInt(params["quantity"]), params["time"], parseBoolean(params["pasta"]));
					break;
				case "CreateMainCourse":
					result = createMainCourse(params["name"], parseFloat(params["price"]), parseInt(params["calories"]),
                        parseInt(params["quantity"]), params["time"], parseBoolean(params["vegan"]), params["type"]);
					break;
				case "CreateDessert":
					result = createDessert(params["name"], parseFloat(params["price"]), parseInt(params["calories"]),
                        parseInt(params["quantity"]), params["time"], parseBoolean(params["vegan"]));
					break;
				case "ToggleSugar":
					result = toggleSugar(params["name"]);
					break;
				case "ToggleVegan":
					result = toggleVegan(params["name"]);
					break;
				case "AddRecipeToRestaurant":
					result = addRecipeToRestaurant(params["restaurant"], params["recipe"]);
					break;
				case "RemoveRecipeFromRestaurant":
					result = removeRecipeFromRestaurant(params["restaurant"], params["recipe"]);
					break;
				case "PrintRestaurantMenu":
					result = printRestaurantMenu(params["name"]);
					break;
				default:
					throw new Error('Invalid command name: ' + cmdName);
			}
			
			return result;
		}
		
		function parseBoolean(value) {
			switch (value) {
				case "yes":
					return true;
				case "no":
					return false;
				default:
					throw new Error("Invalid boolean value: " + value);
			}
		}
		
		return {
			initialize: initialize,
			executeCommand: executeCommand
		};
	}());
	
	
	// Process the input commands and return the results
	var results = '';
	RestaurantEngine.initialize();
	commands.forEach(function (cmd) {
		if (cmd != "") {
			try {
				var cmdResult = RestaurantEngine.executeCommand(cmd);
				results += cmdResult;
			} catch (err) {
			    //console.log(err);
				results += err.message + "\n";
			}
		}
	});
	
	return results.trim();
}

// ------------------------------------------------------------
// Read the input from the console as array and process it
// Remove all below code before submitting to the judge system!
// ------------------------------------------------------------

//(function () {
//	var arr = [];
//	if (typeof (require) == 'function') {
//		// We are in node.js --> read the console input and process it
//		require('readline').createInterface({
//			input: process.stdin,
//			output: process.stdout
//		}).on('line', function (line) {
//			arr.push(line);
//		}).on('close', function () {
//			console.log(processRestaurantManagerCommands(arr));
//		});
//	}
//})();
