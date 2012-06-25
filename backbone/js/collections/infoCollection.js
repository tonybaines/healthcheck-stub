define([
  'jquery',
  'underscore',
  'backbone',
  'models/componentInfo'
], function($, _, Backbone, ComponentInfo){
  var ComponentInfoCollection = Backbone.Collection.extend({
    model: ComponentInfo,
    url: 'http://localhost:5000/info'
  });

  return ComponentInfoCollection; // The 'class', not an instance
});
