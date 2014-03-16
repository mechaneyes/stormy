var SingleSculpture = Backbone.View.extend({
	template: Handlebars.compile(
		// '<div class="container" id="top-bar">' +
		// 	'<div id="back-button"><img src="images/title-bar-back.png" /></div>' +
		// '</div>' +
		'<div class="single-sculpture">' +
		// '<h1>{{name}}</h1>' +
		// '<p><span class="label">{{neighborhood}}</span></p>' +
		'<img src="images/{{mainimage}}" />' +
		'</div>' +
		'<div id="the-map" style="width:320px; height:320px;"></div>'
	),

	initialize: function () {
		this.render();
	},
	
	render: function () {
		this.$el.html(this.template(this.model.attributes));
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
	}
});