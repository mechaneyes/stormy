var AppRouter = Backbone.Router.extend({
	routes: {
		"": "list",
		// "menu-items/:item": "itemDetails"
		"sculptures/:item": "itemDetails"
	},

	initialize: function  () {

		// this.menuItems = new MenuItems();
		// this.menuItems.fetch();

		this.sculptures = new Sculptures();
		this.sculptures.fetch();

		// this.menuItemModel = new MenuItem();
		// this.menuItemView = new MenuItemDetails(
		// 	{
		// 		model: this.menuItemModel
		// 	}
		// );

		this.sculptureModel = new Sculpture();
		this.singleSculptureView = new SingleSculpture(
			{
				model: this.sculptureModel
			}
		);
		
		// this.menuView = new MenuView({collection: this.menuItems});
		this.thumbView = new ThumbView({collection: this.sculptures});

		// Removed Form -----
		// this.menuItemForm = new MenuItemForm({model: new MenuItem()});
	},

	list: function () {
		// $('#app').html(this.menuView.render().el);
		$('#app').html(this.thumbView.render().el);
	},

	itemDetails: function (item) {
		// this.menuItemView.model = this.menuItems.get(item);
		this.singleSculptureView.model = this.sculptures.get(item);
		// $('#app').html(this.menuItemView.render().el);
		$('#app').html(this.singleSculptureView.render().el);
	}
});

var app = new AppRouter();

$(function() {
	Backbone.history.start();
});