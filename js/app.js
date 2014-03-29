var AppRouter = Backbone.Router.extend({
	routes: {
		"": "homepage",
		"neighborhoods": "neighborhoods",
		"thumbs": "thumbs",
		"sculptures/:item": "sculptureDetails"
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

		this.neighborhoodsView = new Neighborhoods();
	},

	homepage: function () {
		$('#top-bar').hide();
		$('#app').html(this.homepageView.render().el);
	},

	neighborhoods: function () {
		$('#top-bar').show();
		$('#app').html(this.neighborhoodsView.render().el);
	},

	thumbs: function () {
		$('#top-bar').show();
		$('#app').html(this.thumbView.render().el);
	},

	sculptureDetails: function (item) {
		this.singleSculptureView.model = this.sculptures.get(item);
		$('#app').html(this.singleSculptureView.render().el);


		// Map must be loaded after the rest of the DOM

		// Setting _this = this because "this" refers to "window" when setTimeout calls the function
		//  - so the method call must be wrapped in an anonymous function
		//  - http://bit.ly/1i0tZz0
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