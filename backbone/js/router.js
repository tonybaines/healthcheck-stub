// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/home/main',
  'views/health/list'
], function($, _, Backbone, mainHomeView, healthListView ){
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      'health': 'showHealth',

      // Default
      '*actions': 'defaultAction'
    },
      // As above, call render on our loaded module
      // 'views/users/list'
    showHealth: function(){
      healthListView.render();
    },
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
