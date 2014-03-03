var ThumbView = Backbone.View.extend({

	template: Handlebars.compile(
		'<div id="thumbs">' + 
		'{{#each models}}<img src="images/{{attributes.thumbnail}}" />{{/each}}' +
		'</div>'
	),
	
	initialize: function  () {
		this.listenTo(this.collection, "reset", this.render);
		this.listenTo(this.collection, "add", this.render);
		this.listenTo(this.collection, "remove", this.render);
	},
	
	render: function () {
		this.$el.html(this.template(this.collection));
		return this;
	}

});