var AppRouter = Backbone.Router.extend({
	routes: {
		"": "list",
		"sculptures/:item": "itemDetails"
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
	},

	list: function () {
		$('#app').html(this.thumbView.render().el);
	},

	itemDetails: function (item) {
		this.singleSculptureView.model = this.sculptures.get(item);
		$('#app').html(this.singleSculptureView.render().el);
	}
});

var app = new AppRouter();

$(function() {
	Backbone.history.start();
});