TS.view.ProgramInfo = Backbone.View.extend({

  template: '<div class="row program" data-cid="<%= cid %>">' +
  '<div class="item show"><span class="label"><%= TS.tstring.title %>:</span> <%= programme.display_titles.title %></div>' +
  '<div class="item datetime"><span class="label"><%= TS.tstring.date %>:</span> <%= moment(start).format(TS.tstring.programDate) %></div>' +
  '<div class="item channel"><span class="label"><%= TS.tstring.channel %>:</span> <%= service.title %></div>' +
  '<div class="item synopsis"><span class="label"><%= TS.tstring.synopsis %>:</span> <%= programme.short_synopsis %></div>' +
  '</div>',

  events: {
    'click': 'onSelectChoice'
  },

  initialize: function() {
    _.bindAll(this);

    this.selectedEl = null;
    this.collection.bind('change', this.render);
    this.collection.bind('reset', this.render);
  },

  render: function() {
    var compiledTemplate = _.template(this.template);
    var dataContext;
    var html = '';

    this.setElement($('#user-list'));
    this.collection.each(function(item) {
      dataContext = item.toJSON();
      dataContext.cid = item.cid;
      html += compiledTemplate(dataContext);
    });
    this.$el.html(html);
  },

  onSelectChoice: function(event) {
    var parent = $(event.target.parentElement);
    var cid = parent.data('cid');
    var userModel;

    if (cid) {
      userModel = this.collection.get(cid);
      parent.addClass('selected');
      if (this.selectedEl) this.selectedEl.removeClass('selected');
      this.selectedEl = parent;

      TS.analytics.event('Program', 'Select', userModel.getServiceKey());

      alert(TS.tstring.selectedProgram + ': ' + userModel.getDisplayTitle());
    }
  }
});