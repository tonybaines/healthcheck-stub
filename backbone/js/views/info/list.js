define([
  'jquery',
  'underscore',
  'backbone',
  'collections/infoCollection',
  'text!templates/info/list.html'
], function($, _, Backbone, ComponentInfoCollection, infoListTemplate){
  var infoListView = Backbone.View.extend({
    el: $("#content"),
    render: function(){
      var that = this;
      var infoCollection = new ComponentInfoCollection();
      infoCollection.fetch({
        success: function(info) {
          $(that.el).html(_.template(infoListTemplate, {instanceInfoList: info.models, _:_}));
        },
        error: function() {
          console.log('Error handler :-(');
        }
      });
    }
  });
  return new infoListView;
});
