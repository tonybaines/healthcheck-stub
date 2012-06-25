define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  var Health = Backbone.Model.extend({
   parse: function() {
    console.log("Parsing")
   }
  });
  return Health;

});
