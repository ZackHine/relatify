/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Service: SpotifyPlaylistService', function () {

    // load the service's module
    beforeEach(module('relatifyApp.services.SpotifyPlaylistService'));

    // instantiate service
    var SpotifyPlaylistService;
    beforeEach(inject(function (_SpotifyPlaylistService_) {
      SpotifyPlaylistService = _SpotifyPlaylistService_;
    }));

    it('should do something', function () {
      expect(!!SpotifyPlaylistService).toBe(true);
    });

  });
});
