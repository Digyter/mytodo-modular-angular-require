/*jshint unused: vars */
define(function (require){
  'use strict';

  /**
   * @ngdoc overview
   * @name app
   * @description
   * # app
   *
   * Main module of the application.
   */

  var angular = require('angular'),
      name = 'app',
      home = require('home'),
      about = require('about'),
      contact = require('contact'),
      ngModule;

  ngModule = angular
    .module(name, [
      'ngCookies',
      'ngResource',
      'ngSanitize',
      'ngRoute',
      'ngAnimate',
      'ngTouch',
      home.name,
      about.name,
      contact.name
      ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/home.html',
          controller: 'HomeController',
          controllerAs: 'home'
        })
        .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'AboutController',
          controllerAs: 'about'
        })
        .when('/contact', {
          templateUrl: 'views/contact.html',
          controller: 'ContactController',
          controllerAs: 'contact'
        })
        .otherwise({
          redirectTo: '/'
        });
    });

  return {
    name: name,
    ngModule: ngModule
  };

});