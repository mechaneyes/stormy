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

		// this.instance = new;
		// app.Views.App();

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

		// Need to load map after the rest of the DOM's loaded
		// this.singleSculptureView.loadMap();
		var _this = this;
		setTimeout(function() {
			_this.singleSculptureView.loadMap();
		}, 600);
	}
});

$(function() {
	app = new AppRouter();
	Backbone.history.start();
});