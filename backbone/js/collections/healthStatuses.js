define([
  'jquery',
  'underscore',
  'backbone',
  'models/health'
], function($, _, Backbone, Health){
  var HealthStatuses = Backbone.Collection.extend({
    model: Health,
    url: 'http://localhost:5000/health'
  });

  return HealthStatuses; // The 'class', not an instance
});
