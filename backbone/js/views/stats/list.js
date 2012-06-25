define([
  'jquery',
  'underscore',
  'backbone',
  'collections/statisticsCollection',
  'text!templates/stats/list.html'
], function($, _, Backbone, StatisticsCollection, statsListTemplate){
  var statsListView = Backbone.View.extend({
    el: $("#content"),
    render: function(){
      var that = this;
      var statsCollection = new StatisticsCollection();
      statsCollection.fetch({
        success: function(stats) {
          $(that.el).html(_.template(statsListTemplate, {instanceStatsList: stats.models, _:_}));
        },
        error: function() {
          console.log('Error handler :-(');
        }
      });
    }
  });
  return new statsListView;
});
