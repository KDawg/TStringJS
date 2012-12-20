SM.view.Application = Backbone.View.extend({

	el: 'body',

	initialize: function() {

	},

	events: {
		'click #lang-load': 'onLangLoad'
	},

	onLangLoad: function() {
		var elList = $('#lang-list');

		alert(elList.val());
	}

});