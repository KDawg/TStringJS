
var Application = (function($) {

	var appView;
	var showsListing;
	var showsView;


	function initialize() {
		appView = new SM.view.Application();

		getListing();
	}


	function getListing() {
		showsListing = new SM.collection.ProgramList();
		showsView = new SM.view.ProgramInfo({collection: showsListing});

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
		}
	};


})(jQuery);

SM.app = Application;