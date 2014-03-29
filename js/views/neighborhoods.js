var Neighborhoods = Backbone.View.extend({

	template: Handlebars.compile(
		'<div id="homepage">' +
			'<img src ="images/neighborhoods-header.jpg" />' +
			'<a href="#/thumbs">' +
				'<img src="images/neighborhoods-northWoods.jpg" />' +
			'</a>' +
			'<img src ="images/neighborhoods-rest.jpg" />' +
		'</div>'
	),
	
	render: function () {
		// $('#top-bar').hide();
		this.$el.html(this.template()).fadeIn(900);
		return this;
	}
});