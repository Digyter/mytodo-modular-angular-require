define(function(require) {
  'use strict';

  var angular = require('angular'),
      name = 'about',
      ngModule,
      aboutController = require('./about.controller');

  ngModule = angular.module(name, [])
    .controller('AboutController', aboutController);

  return {
    name: name,
    ngModule: ngModule
  };

});