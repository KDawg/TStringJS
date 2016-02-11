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
    '<option value="psuedo"><%= TS.tstring.psuedo %></option>' +
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
    this.renderAtTime = Date.now();
  },

  onLangLoad: function () {
    var elList = $('#lang-list');
    var lang = elList.val();
    var langFn;
    var dt;
    var timeStart = Date.now();

    dt = timeStart - this.renderAtTime;
    TS.analytics.trackTime('TimeOnTask', 'RenderToLangLoad', dt);

    if (lang === 'english') langFn = 'en-US.js';
    else if (lang === 'french') langFn = 'fr.js';
    else if (lang === 'spanish') langFn = 'es.js';
    else if (lang === 'italian') langFn = 'it.js';
    else if (lang === 'german') langFn = 'de.js';
    else if (lang === 'psuedo') langFn = 'dbg-psuedo.js';

    TS.analytics.event('Language', 'Select', lang);

    $.ajax({
      url: 'code/strings/' + langFn,
      dataType: 'script',
      success: function (data, textStatus, jqXHR) {
        dt = Date.now() - timeStart;
        TS.app.onRender();
        TS.analytics.trackTime('Perf', 'LangLoad', dt, lang);
      },
      error: function () {
        console.log('language service request error');
      }
    });

  }

});