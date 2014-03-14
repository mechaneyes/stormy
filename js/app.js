var AppRouter = Backbone.Router.extend({
	routes: {
		"": "homepage",
		"thumbs": "thumbs",
		"sculptures/:item": "sculptureDetails",
		"googlemap": "googleMap"
	},

	initialize: function  () {

		this.sculptures = new Sculptures();
		this.sculptures.fetch();

		this.sculptureModel = new Sculpture();
		this.singleSculptureView = new SingleSculpture(
			{
				model: this.sculptureModel
			}
		);
		
		this.thumbView = new ThumbView({collection: this.sculptures});

		this.homepageView = new Homepage();

	},

	homepage: function () {
		$('#top-bar').hide();
		$('#app').html(this.homepageView.render().el);
	},

	thumbs: function () {
		$('#top-bar').show();
		$('#app').html(this.thumbView.render().el);
	},

	sculptureDetails: function (item) {
		this.singleSculptureView.model = this.sculptures.get(item);
		$('#app').html(this.singleSculptureView.render().el);
		
		var map = new google.maps.Map(document.getElementById('the-map'), mapOptions);
		var marker = new google.maps.Marker({
		    position: myLatlng,
		    map: map
		});
	},
});

$(function() {
	app = new AppRouter();
	Backbone.history.start();
});