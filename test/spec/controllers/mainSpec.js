/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Controller: HomeController', function () {

    // load the controller's module
    beforeEach(module('home'));

    var HomeController;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller) {

      HomeController = $controller('HomeController', {
        // place here mocked dependencies
      });
    }));

    it('should have no items to start', function () {
      expect(HomeController.todos.length).toBe(0);
    });
  });
});
