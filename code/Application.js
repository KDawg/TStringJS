define(['views/AppView', 'collections/ProgramListCollection', 'views/ProgramInfoView', 'strings/en-US'],
	function(AppView, ProgramList, ProgramInfoView) {
	var Application = {

		appView: null,

		showsListing: null,

		showsView: null,

		initialize: function() {
			this.appView = new AppView();
			this.appView.render();
			this.getListing();
		},

		getListing: function() {
			var self = this;

			this.showsListing = new ProgramList();
			this.showsView = new ProgramInfoView({collection: this.showsListing});

			$.ajax({
				url: 'http://www.bbc.co.uk/tv/programmes/genres/drama/scifiandfantasy/schedules/upcoming.json',
				dataType: 'json',
				success: function(data) {
					self.showsListing.reset(data.broadcasts);
				},
				error: function() {
					console.log('service request error');
				}
			});
		},

		render: function() {
			this.appView.render();
			this.showsView.render();
		}
	};

	return Application;
});