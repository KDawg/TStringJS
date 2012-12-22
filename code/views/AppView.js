define(["strings/en-US"], function(tstrings) {
	var ApplicationView = Backbone.View.extend({

		el: $('#main'),

		template: '<h1><%= tstrings.appTitle %></h1>' +
			'<h2><%= tstrings.appSubTitle %></h2>' +

			'<div class="lang-panel">' +
				'<select id="lang-list">' +
				'<option value="english"><%= tstrings.english %></option>' +
				'<option value="spanish"><%= tstrings.spanish %></option>' +
				'<option value="french"><%= tstrings.french %></option>' +
				'</select>' +
				'<button id="lang-load"><%= tstrings.select %></button>' +
			'</div>' +
			'<div class="row header"><div>&nbsp</div></div>' +
			'<div id="user-list"></div>',

		events: {
			'click #lang-load': 'onLangLoad'
		},

		render: function () {
			var tstrings2 = require("strings/en-US");

			var compiledTemplate = _.template(this.template);
			var html = compiledTemplate({});
			this.$el.html(html);
		},

		onLangLoad: function () {
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
				success: function (data, textStatus, jqXHR) {
					console.log(data);
					///SM.app.onRender();
				},
				error: function () {
					console.log('service request error');
				}
			});

		}
	});

	return ApplicationView;
});