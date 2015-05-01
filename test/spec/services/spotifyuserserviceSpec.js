/**
 * Created by Zack on 4/30/2015.
 */
define(['angular',
  'angular-mocks',
  'app'], function(angular, mocks, app) {
  'use strict';

  describe('Service: SpotifyUserService', function () {

    //// load the service's module
    beforeEach(module('relatifyApp'));

    // instantiate service
    var SpotifyUserService;
    beforeEach(inject(function (_SpotifyUserService_) {
      SpotifyUserService = _SpotifyUserService_;
    }));

    it('should be defined', function () {
      expect(SpotifyUserService).toBeDefined();
    });

  });
});
