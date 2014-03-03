var Sculpture = Backbone.Model.extend({
	url: 'http://localhost/stormking/02a/data/menu-items.json',
	defaults: {
		category: 'Entreés',
		imagepath: 'no-image.jpg',
		name: ''
	}
});