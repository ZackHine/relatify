/*jshint unused: vars */
define(['angular',
  'angular-mocks',
  'app'], function(angular, mocks, app) {
  'use strict';

  describe('Controller: SongsCtrl', function () {

    // load the controller's module
    beforeEach(
      module('relatifyApp.controllers.SongsCtrl')
    );

    var SongsCtrl,
      scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      SongsCtrl = $controller('SongsCtrl', {
        $scope: scope
      });
    }));

    it('should be defined', function () {
      expect(SongsCtrl).toBeDefined();
    });
  });
});
