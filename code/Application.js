
var Application = (function($) {

	var appView;
	var showsListing;
	var showsView;


	function initialize() {
		appView = new SM.view.Application();

		getListing();
	}


	function getListing() {
		showsListing = new SM.collection.UserInfo();
		showsView = new SM.view.UserInfo({collection: showsListing});

		$.ajax({
			url: 'http://www.bbc.co.uk/tv/programmes/genres/drama/scifiandfantasy/schedules/upcoming.json',
			dataType: 'json',
			success: function(data) {
				showsListing.reset(data.broadcasts);
			},
			error: function() {

			}
		});

	}


	// public interface is returned

	return {
		onInit: function() {
			initialize();
		},

//		onSortBy: function(keyName) {
//			var sortedArray = followerUserInfo.sortBy(function(userModel) {
//				return userModel.get(keyName);
//			});
//			followerUserInfo.reset(sortedArray);
//		},
//
		showsListing: function() {
			return showsListing;
		}
	};


})(jQuery);

SM.app = Application;