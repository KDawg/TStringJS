TS.collection.ProgramList = Backbone.Collection.extend({

  model: TS.model.ProgramInfo,

//  url: 'http://www.bbc.co.uk/tv/programmes/genres/drama/scifiandfantasy/schedules/upcoming.json',
  url: '/code/mock/upcoming.json',

  parse: function (response) {
    return response.broadcasts;

  }

});