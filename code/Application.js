
var Application = (function($) {

	var appView;
	var showsListing;
	var showsView;


	function initialize() {
		appView = new TS.view.Application();
		appView.render();

		getListing();
	}


	function getListing() {
		showsListing = new TS.collection.ProgramList();
		showsView = new TS.view.ProgramInfo({collection: showsListing});

		$.ajax({
			url: 'http://www.bbc.co.uk/tv/programmes/genres/drama/scifiandfantasy/schedules/upcoming.json',
			dataType: 'json',
			success: function(data) {
				showsListing.reset(data.broadcasts);
			},
			error: function() {
				console.log('service request error');
			}
		});
	}


	// public interface is returned

	return {
		onInit: function() {
			initialize();
		},

		onRender:function() {
			appView.render();
			showsView.render();
		}
	};


})(jQuery);

TS.app = Application;