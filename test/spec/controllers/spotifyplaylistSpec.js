/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Controller: SpotifyPlaylistCtrl', function () {

    // load the controller's module
    beforeEach(module('relatifyApp.controllers.SpotifyPlaylistCtrl'));

    var SpotifyPlaylistCtrl,
      scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      SpotifyPlaylistCtrl = $controller('SpotifyPlaylistCtrl', {
        $scope: scope
      });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
      expect(scope.awesomeThings.length).toBe(3);
    });
  });
});
