HomerView = Backbone.View.extend({
	initialize: function() {
		// console.log('homer viewing');
	},
	
	render: function () {
		console.log('homer viewing');
		
		this.$el.html(this.template(this.model.attributes));
		return this;
	}
});