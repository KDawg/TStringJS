SM.view.Application = Backbone.View.extend({

	el: 'body',

	initialize: function() {
		this.prevSortEl = null;
	},

	events: {
		'click #name-header': 'onNameSort',
		'click #follower-header': 'onFollowerSort',
		'click #friend-header': 'onFriendSort',
		'click #tweet-header': 'onTweetSort',
		'click #location-header': 'onLocationSort'
	},

	sortListBy: function(event, keyName) {
		var curSortEl = $(event.currentTarget);
		if (this.prevSortEl !== null) {
			this.prevSortEl.removeClass('header-highlight');
		}
		curSortEl.addClass('header-highlight');
		this.prevSortEl = curSortEl;
		SM.app.onSortBy(keyName);
	},

	onNameSort: function(event) {
		this.sortListBy(event, 'name');
	},

	onFollowerSort: function(event) {
		this.sortListBy(event, 'followers_count');
	},

	onFriendSort: function(event) {
		this.sortListBy(event, 'friends_count');
	},

	onTweetSort: function(event) {
		this.sortListBy(event, 'statuses_count');
	},

	onLocationSort: function(event) {
		this.sortListBy(event, 'location');
	}

});