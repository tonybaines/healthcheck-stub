// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/home/main',
  'views/health/list',
  'views/stats/list',
  'views/info/list'
], function($, _, Backbone, mainHomeView, healthListView, statsListView, infoListView ){
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      'health': 'showHealth',
      'stats': 'showStats',
      'info': 'showInfo',

      // Default
      '*actions': 'defaultAction'
    },
      // As above, call render on our loaded module
      // 'views/users/list'
    showHealth: function(){ healthListView.render(); },
    showStats: function(){ statsListView.render(); },
    showInfo: function(){ infoListView.render(); },

    defaultAction: function(actions){
      // We have no matching route, lets display the home page
      mainHomeView.render();
    }
  });

  var initialize = function(){
    var app_router = new AppRouter;
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});
