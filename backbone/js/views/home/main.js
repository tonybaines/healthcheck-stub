// Filename: views/home/main
define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/home/main.html'
], function($, _, Backbone, mainHomeTemplate){

  var mainHomeView = Backbone.View.extend({
    el: $("#content"),
    render: function(){
      this.el.html(mainHomeTemplate);
    }
  });
  return new mainHomeView;
});
