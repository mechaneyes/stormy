var Homepage = Backbone.View.extend({

	template: Handlebars.compile(
		'<div id="homepage">' +
			'<a href="#/thumbs">' +
				'<img src="images/homepage.jpg" />' +
			'</a>' +
		'</div>'
	),
	
	render: function () {
		this.$el.html(this.template(this.options));
		return this;
	}
});