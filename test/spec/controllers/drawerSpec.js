/**
 * Created by Zack on 4/30/2015.
 */
/*jshint unused: vars */
define(['angular',
  'angular-mocks',
  'app',
  'spotify',
  'relatify.app.services/spotifyuserservice'], function(angular, mocks, app, Spotify) {
  'use strict';

  describe('Controller: DrawerCtrl', function () {

    // load the controller's module
    beforeEach(module('relatifyApp.controllers.DrawerCtrl'));

    var DrawerCtrl,
      scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      DrawerCtrl = $controller('DrawerCtrl', {
        $scope: scope
      });
    }));

    it('should be defined', function () {
      expect(DrawerCtrl).toBeDefined();
    });
  });
});
