TS.model.ProgramInfo = Backbone.Model.extend({

  getDisplayTitle: function () {
    return this.get('programme').display_titles.title;
  }

});