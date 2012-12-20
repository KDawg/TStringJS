SM.collection.ProgramList = Backbone.Collection.extend({

	model: SM.model.ProgramInfo,

	url: 'http://www.bbc.co.uk/tv/programmes/genres/drama/scifiandfantasy/schedules/upcoming.json'

});