define('factory', function() {

    require(['container'], function(container) {
        container.title('New Section');
        container.addToDOM(document.body);
	});
});