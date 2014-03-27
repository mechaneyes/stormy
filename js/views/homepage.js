var Homepage = Backbone.View.extend({

	template: Handlebars.compile(
		'<div id="homepage">' +
			'<a href="#/thumbs">' +
				'<img src="images/homepage.jpg" />' +
			'</a>' +
		'</div>'
	),
	
	render: function () {
		// $('#top-bar').hide();
		this.$el.html(this.template()).fadeIn(900);
		return this;
	}
});