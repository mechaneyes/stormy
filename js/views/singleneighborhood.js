var SingleNeighborhood = Backbone.View.extend({
	template: Handlebars.compile(
		
		'<img id="neighborhood-header" src="images/neighborhoods-museumHill.jpg" />' +
		'<div id="thumbs">' + 
		'{{#each models}}' +
			'<a href="#/neighborhoods/{{attributes.url}}">' +
				'<img src="images/{{attributes.thumbnail}}" />' +
			'</a>' +
		'{{/each}}' +
		'</div>'

	),

	initialize: function () {
		this.render();
	},
	
	render: function () {
		// this.$el.html(this.template(this.model.attributes));
		this.$el.html(this.template(this.model.attributes)).fadeIn(900);

		// this.setTimeout(function() {
		// 	// this.loadMap();
		// 	console.log('delayed');
		// }, 4000);
		return this;
	},

	loadMap: function() {
		var sculptLatLng = new google.maps.LatLng(this.model.get('latitude'), this.model.get('longitude'));
		var mapOptions = {
			zoom: this.model.get('zoom'),
			center: sculptLatLng,
			mapTypeId: google.maps.MapTypeId.SATELLITE,
			disableDefaultUI: true
		};
		var map = new google.maps.Map(document.getElementById('the-map'), mapOptions);
		var marker = new google.maps.Marker({
		    position: sculptLatLng,
		    map: map
		});
		// console.log(sculptLatLng);
	}
});