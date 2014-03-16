var Sculpture = Backbone.Model.extend({
	// url: 'http://localhost/stormking/02a/data/menu-items.json',
	// url: '../../data/menu-items.json',
	defaults: {
		zoom: 17,
		center: 'google.maps.LatLng(41.428304, -74.061790)',
		latitude: '41.428304',
		longitude: '-74.061790',
		mapTypeId: 'google.maps.MapTypeId.SATELLITE',
		disableDefaultUI: 'true'		
	}
});