define([
  'jquery',
  'underscore',
  'backbone',
  'collections/healthStatuses',
  'text!templates/health/list.html'
], function($, _, Backbone, HealthStatuses, healthListTemplate){
  var healthListView = Backbone.View.extend({
    el: $("#content"),
    render: function(){
      var that = this;
      var statuses = new HealthStatuses();
      statuses.fetch({
        success: function(statuses) {
          $(that.el).html(_.template(healthListTemplate, {componentHealthStatuses: statuses.models, _:_}));
        },
        error: function() {
          console.log('Error handler :-(');
        }
      });
    }
  });
  return new healthListView;
});
