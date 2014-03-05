var Sculptures = Backbone.Collection.extend({
	comparator: 'name',
	model: Sculpture,
	// url: 'http://localhost/stormking/02a/data/sculptures.json'
	url: './data/sculptures.json'
});