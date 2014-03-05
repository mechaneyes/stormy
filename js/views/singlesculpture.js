var SingleSculpture = Backbone.View.extend({
	template: Handlebars.compile(
		// '<div class="container" id="top-bar">' +
		// 	'<div id="back-button"><img src="images/title-bar-back.png" /></div>' +
		// '</div>' +
		'<div class="single-sculpture">' +
		// '<h1>{{name}}</h1>' +
		// '<p><span class="label">{{neighborhood}}</span></p>' +
		'<img src="images/{{mainimage}}" />' +
		'</div>'
	),

	initialize: function  () {
		// console.log('fire mutherfocker');
		this.render();
		this.listenTo(this.model, "change", this.render);
	},

	deleteItem: function () {
		this.model.destroy(
			{
				success: function (model) {
					app.menuItems.remove(model.get('id'));
					app.navigate("", {trigger: true});
				}
			}
		);
	},
	
	render: function () {
		this.$el.html(this.template(this.model.attributes));
		this.delegateEvents({
			'click .btn-danger': 'deleteItem'
		});
		return this;
	}
});