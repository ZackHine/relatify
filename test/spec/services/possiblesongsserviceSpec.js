/*jshint unused: vars */
define(['angular',
  'angular-mocks',
  'app'], function(angular, mocks, app) {
  'use strict';

  describe('Service: PossibleSongsService', function () {

    //// load the service's module
    beforeEach(module('relatifyApp'));

    // instantiate service
    var PossibleSongsService;
    beforeEach(inject(function (_PossibleSongsService_) {
      PossibleSongsService = _PossibleSongsService_;
    }));

    it('should be defined', function () {
      expect(PossibleSongsService).toBeDefined();
    });

  });
});
