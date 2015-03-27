var models = models || {};

(function(scope) {

	function CustomerReview(customer, content, rating, createdOn) {
		this._customer = customer;
		this._content = content;
		this._rating = rating;
	    this._createdOn = createdOn;
	}

	scope.getCustomerReview = function(customer, content, rating, createdOn) {
	    return new CustomerReview(customer, content, rating, createdOn);
	}

})(models);