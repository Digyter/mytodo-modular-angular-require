/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Controller: AboutController', function () {

    // load the controller's module
    beforeEach(module('about'));

    var AboutController;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller) {
      AboutController = $controller('AboutController', {
        // place here mocked dependencies
      });
    }));

    it('have no message to start', function () {
      expect(AboutController.message).toBe('');
    });
  });
});
