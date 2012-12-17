SM.view.UserInfo = Backbone.View.extend({

	className: 'subject-panel',

	el: $('#user-list'),

	template:
		'<div class="row user" data-cid="<%= cid %>">' +
			'<div class="item wide"><%= programme.title %></div>' +
			'<div class="item"><%= programme.duration %></div>' +
			'<div class="item medium"><%= programme.short_synopsis %></div>' +
		'</div>',

	events: {
		'click': 'onSelectChoice'
	},

	initialize: function() {
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

		if (cid !== undefined) {
			userModel = this.collection.getByCid(cid);
			console.log(userModel.attributes);
		}
	}
});