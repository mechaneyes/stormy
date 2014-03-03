var SingleSculpture = Backbone.View.extend({
	template: Handlebars.compile(
		'<div>' +
		'<h1>{{name}}</h1>' +
		'<p><span class="label">{{category}}</span></p>' +
		'<img src="photos/{{imagepath}}" class="img-polaroid" />' +
		'</div>' +
		'<p></p>' +
		'<button type="button" class="btn btn-danger confirm-delete">Delete</button>'
	),

	initialize: function  () {
		console.log('fire mutherfocker');
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