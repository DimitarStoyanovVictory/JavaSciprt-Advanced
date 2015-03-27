var models = models || {};

(function(scope) {

    function ShoppingCart() {
        this._Items = [];
	}

	ShoppingCart.prototype.addItem = function(item) {
	    this._Items.push(item);
	}

	ShoppingCart.prototype.getTotalPrice = function() {
		var totalPrice = 0;
	    this._Items.forEach(function(item) {
	        totalPrice += item.price;
		})();

	    return totalPrice;
	}

	scope.getShoppingCart = function() {
	    return new ShoppingCart();
	}

})(models);

	