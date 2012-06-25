define([
  'jquery',
  'underscore',
  'backbone',
  'models/stats'
], function($, _, Backbone, Stats){
  var StatisticsCollection = Backbone.Collection.extend({
    model: Stats,
    url: 'http://localhost:5000/stats'
  });

  return StatisticsCollection; // The 'class', not an instance
});
