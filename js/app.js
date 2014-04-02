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
		
		this.homepageView = new Homepage();

		this.neighborhoodView = new Neighborhood();

		this.thumbView = new ThumbView({collection: this.sculptures});

		$('#top-bar').hide();
	},

	homepage: function () {
		$('#top-bar').hide();
		$('#app').html(this.homepageView.render().el);
	},

	neighborhoods: function () {
		$('#top-bar').hide();
		$('#top-bar').fadeIn(900);
		$('#app').html(this.neighborhoodView.render().el);
	},

	thumbs: function () {
		$('#top-bar').hide();
		$('#top-bar').fadeIn(900);
		$('#app').html(this.thumbView.render().el);
	},

	sculptureDetails: function (item) {
		this.singleSculptureView.model = this.sculptures.get(item);
		$('#app').html(this.singleSculptureView.render().el);

		/*
		Map must be loaded after the rest of the DOM

		Setting _this = this because "this" refers to "window" when setTimeout calls the function
		 - so the method call must be wrapped in an anonymous function
		 - http://bit.ly/1i0tZz0
		*/
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