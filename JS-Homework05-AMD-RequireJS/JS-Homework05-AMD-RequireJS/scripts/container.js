
define('container', function() {

    var Container = {
	
		title: function(title) {
			this._title = title;
		},

		addToDOM: function(parent) {
            var container, title, newSection, newSectionButton, newSectionTitle;

            container = document.createElement('div');
            container.id = 'container';
            title = document.createElement('h1');
            title.innerHTML = this._title;
            container.appendChild(title);
            newSectionTitle = document.createElement('input');
            newSectionTitle.placeholder = 'Title...';
            newSectionButton = document.createElement('input');
            newSectionButton.type = 'button';
            newSectionButton.value = 'New Section';
            newSectionButton.addEventListener("click", function() {
                require(['section'], function(section) {
					section.title(newSectionTitle.value);
                    section.addToDOM(document.getElementById('container'));
                });
            });
            newSection = document.createElement('div');
            newSection.id = 'newSection';
            newSection.appendChild(newSectionTitle);
            newSection.appendChild(newSectionButton);
            container.appendChild(newSection);
            if (!(document.getElementById('container'))) {
                parent.appendChild(container);
            }
		}
    }

    return Container;
})
