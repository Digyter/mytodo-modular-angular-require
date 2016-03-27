define(function(require) {
  'use strict';

  require('angular-ui-sortable');

  var angular = require('angular'),
      name = 'home',
      ngModule,
      homeController = require('./home.controller');

  ngModule = angular.module(name, ['ui.sortable'])
    .controller('HomeController', homeController);

  return {
    name: name,
    ngModule: ngModule
  };

});