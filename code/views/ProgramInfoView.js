SM.view.ProgramInfo = Backbone.View.extend({

	className: 'subject-panel',

	el: $('#user-list'),

	template:
		'<div class="row program" data-cid="<%= cid %>">' +
			'<div class="item show">Show: <%= programme.display_titles.title %></div>' +
			'<div class="item duration">Runs: <%= programme.duration %></div>' +
			'<div class="item datetime">On: <%= start %></div>' +
			'<div class="item channel">Channel: <%= service.title %></div>' +
			'<div class="item synopsis">Synopsis: <%= programme.short_synopsis %></div>' +
		'</div>',

	events: {
		'click': 'onSelectChoice'
	},

	initialize: function() {
		this.selectedEl = null;
		_.bindAll(this);

		this.collection.bind('change', this.render);
		this.collection.bind('reset', this.render);
	},

	render: function() {
		var compiledTemplate = _.template(this.template);
		var dataContext, html, el;
		var self = this;

		self.$el.empty();
		this.collection.each(function(item) {
			dataContext = item.toJSON();
			dataContext.cid = item.cid;

			html = compiledTemplate(dataContext);
			el = $(html);
			self.$el.append(el);
		});

		return this;
	},

	onSelectChoice: function(event) {
		var parent = $(event.target.parentElement);
		var cid = parent.data('cid');
		var userModel;

		if (cid) {
			parent.addClass('selected');
			userModel = this.collection.getByCid(cid);
			console.log(userModel.attributes);
			if (this.selectedEl) this.selectedEl.removeClass('selected');
			this.selectedEl = parent;
		}
	}
});