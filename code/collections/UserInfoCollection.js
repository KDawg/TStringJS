SM.collection.UserInfo = Backbone.Collection.extend({

	model: SM.model.UserInfo,

	url: 'http://www.bbc.co.uk/tv/programmes/genres/drama/scifiandfantasy/schedules/upcoming.json'

});