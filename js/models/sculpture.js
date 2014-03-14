var Sculpture = Backbone.Model.extend({
	// url: 'http://localhost/stormking/02a/data/menu-items.json',
	// url: '../../data/menu-items.json',
	defaults: {
		center: 'new google.maps.LatLng(-34.397, 150.644)',
		zoom: '8',
		mapTypeId: 'google.maps.MapTypeId.ROADMAP'
	}
});