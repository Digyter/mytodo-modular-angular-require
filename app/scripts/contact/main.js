define(function(require) {
  'use strict';

  var angular = require('angular'),
      name = 'contact',
      ngModule,
      contactController = require('./contact.controller');

  ngModule = angular.module(name, [])
    .controller('ContactController', contactController);

  return {
    name: name,
    ngModule: ngModule
  };

});