TS.model.ProgramInfo = Backbone.Model.extend({

  getDisplayTitle: function () {
    return this.get('programme').display_titles.title;
  },

  getServiceKey: function() {
    var service = this.get('service') || {};

    return service.key;
  }

});