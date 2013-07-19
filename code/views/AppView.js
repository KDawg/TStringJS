TS.view.Application = Backbone.View.extend({

  el: $('#main'),

  template: '<h1><%= TS.tstring.appTitle %></h1>' +
    '<h2><%= TS.tstring.appSubTitle %></h2>' +
    '<a href="http://blog.katworksgames.com/2012/12/23/translated-strings-and-foreign-language-support/" target="_blank"><h2><%= TS.tstring.blogLink %></h2></a>' +

    '<div class="lang-panel">' +
    '<select id="lang-list">' +
    '<option value="english"><%= TS.tstring.english %></option>' +
    '<option value="spanish"><%= TS.tstring.spanish %></option>' +
    '<option value="french"><%= TS.tstring.french %></option>' +
    '<option value="italian"><%= TS.tstring.italian %></option>' +
    '<option value="german"><%= TS.tstring.german %></option>' +
    '</select>' +
    '<button id="lang-load"><%= TS.tstring.select %></button>' +
    '</div>' +
    '<div class="row header">BBC SciFi <%= TS.tstring.programListing %></div>' +
    '<div id="user-list"></div>',

  events: {
    'click #lang-load': 'onLangLoad'
  },

  render: function () {
    var compiledTemplate = _.template(this.template);
    var html = compiledTemplate({});
    this.$el.html(html);
  },

  onLangLoad: function () {
    var elList = $('#lang-list');
    var lang = elList.val();
    var langFn;

    if (lang === 'english') langFn = 'en-US.js';
    else if (lang === 'french') langFn = 'fr.js';
    else if (lang === 'spanish') langFn = 'es.js';
    else if (lang === 'italian') langFn = 'it.js';
    else if (lang === 'german') langFn = 'de.js';

    $.ajax({
      url: 'code/strings/' + langFn,
      dataType: 'script',
      success: function (data, textStatus, jqXHR) {
        TS.app.onRender();
      },
      error: function () {
        console.log('language service request error');
      }
    });

  }

});