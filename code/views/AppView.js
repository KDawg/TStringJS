SM.view.Application = Backbone.View.extend({

	el: $('#main'),

	template:
		'<h1><%= SM.tstrings.appTitle %></h1>' +
		'<h2><%= SM.tstrings.appSubTitle %></h2>' +

		'<div id="lang-panel">' +
			'<select id="lang-list">' +
				'<option value="english"><%= SM.tstrings.english %></option>' +
				'<option value="spanish"><%= SM.tstrings.spanish %></option>' +
				'<option value="french"><%= SM.tstrings.french %></option>' +
			'</select>' +
			'<button id="lang-load"><%= SM.tstrings.select %></button>' +
		'</div>' +
		'<div class="row header"><div>&nbsp</div></div>' +
		'<div id="user-list"></div>',

	initialize: function() {
	},

	events: {
		'click #lang-load': 'onLangLoad'
	},

	render: function() {
		var compiledTemplate = _.template(this.template);
		var html = compiledTemplate({});
		this.$el.html(html);
	},

	onLangLoad: function() {
		var elList = $('#lang-list');
		var lang = elList.val();
		var langFn;

		if (lang === 'english') langFn = 'en-US.js';
		else if (lang === 'french') langFn = 'fr.js';
		else if (lang === 'spanish') langFn = 'es.js';

		console.log(lang);
		$.ajax({
			url: 'strings/' + langFn,
			dataType: 'script',
			success: function(data, textStatus, jqXHR) {
				console.log(data);
				SM.app.onRender();
			},
			error: function() {
				console.log('service request error');
			}
		});

	}

});