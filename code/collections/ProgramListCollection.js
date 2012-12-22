define(['models/ProgramInfo'], function(ProgramInfoModel) {
	var ProgramList = Backbone.Collection.extend({

		model: ProgramInfoModel,

		url: 'http://www.bbc.co.uk/tv/programmes/genres/drama/scifiandfantasy/schedules/upcoming.json'

	});

	return ProgramList;
});