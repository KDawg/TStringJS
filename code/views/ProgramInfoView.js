SM.view.ProgramInfo = Backbone.View.extend({

	className: 'subject-panel',

	template:
		'<div class="row program" data-cid="<%= cid %>">' +
			'<div class="item show"><%= SM.tstrings.title %>: <%= programme.display_titles.title %></div>' +
			'<div class="item datetime"><%= SM.tstrings.date %>: <%= moment(start).format("MMM Do YYYY, h:mm:ss a") %></div>' +
			'<div class="item channel"><%= SM.tstrings.channel %>: <%= service.title %></div>' +
			'<div class="item synopsis"><%= SM.tstrings.synopsis %>: <%= programme.short_synopsis %></div>' +
		'</div>',

	events: {
		'click': 'onSelectChoice'
	},

	initialize: function() {
		_.bindAll(this);

		this.selectedEl = null;
		this.collection.bind('change', this.render);
		this.collection.bind('reset', this.render);
	},

	render: function() {
		var compiledTemplate = _.template(this.template);
		var dataContext, html, el;
		var self = this;

		this.setElement($('#user-list'));
		this.$el.empty();
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