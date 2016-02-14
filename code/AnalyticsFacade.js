var AnalyticsFacade = (function() {

  return {
    onInit: function() {
      (function(i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function() {
            (i[r].q = i[r].q || []).push(arguments)
          }, i[r].l = 1 * new Date();
        a = s.createElement(o),
          m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m)
      })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

      ga('create', 'UA-35522017-2', 'auto');
      ga('send', 'pageview');
    },

    event: function(category, action, label, value) {
      ga('send', 'event', category, action, label, value);
    },

    time: function(category, action, durationMS, context) {
      ga('send', 'timing', category, action, durationMS, context);
    }
  }
})();

TS.analytics = AnalyticsFacade;
