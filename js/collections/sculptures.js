var Sculptures = Backbone.Collection.extend({
	comparator: 'name',
	model: Sculpture,
	url: './data/sculptures.json'
});