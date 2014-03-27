var ThumbView = Backbone.View.extend({

	template: Handlebars.compile(
		// '<div class="container" id="top-bar">' +
		// 	'<div id="back-button" ><img src="images/title-bar-back.png" /></div>' +
		// '</div>' +
		'<div id="thumbs">' + 
		'<h2>North Woods</h2>' +
		'{{#each models}}' +
			'<a href="#/sculptures/{{attributes.url}}">' +
				'<img src="images/{{attributes.thumbnail}}" />' +
			'</a>' +
		'{{/each}}' +
		'</div>'
	),
	
	initialize: function  () {
		this.listenTo(this.collection, "reset", this.render);
		this.listenTo(this.collection, "add", this.render);
		this.listenTo(this.collection, "remove", this.render);
	},
	
	render: function () {
		this.$el.html(this.template(this.collection)).fadeIn(900);
		return this;
	}
});