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

	id: 'map',

	initialize: function  () {
		mapOptions = {
		    zoom: 8,
		    center: new google.maps.LatLng(-34.397, 150.644)
		  };
		// this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
		this.render();
	},

	// deleteItem: function () {
	// 	this.model.destroy(
	// 		{
	// 			success: function (model) {
	// 				app.menuItems.remove(model.get('id'));
	// 				app.navigate("", {trigger: true});
	// 			}
	// 		}
	// 	);
	// },
	
	render: function () {
		this.$el.html(this.template(this.model.attributes));

		


		return this;
	},

	drawmap: function() {
		this.map = new google.maps.Map(document.getElementById('the-map'), mapOptions);
		// this.$el.append();
	}
});