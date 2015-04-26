/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Service: RelatedArtistsService', function () {

    // load the service's module
    beforeEach(module('relatifyApp.services.RelatedArtistsService'));

    // instantiate service
    var RelatedArtistsService;
    beforeEach(inject(function (_RelatedArtistsService_) {
      RelatedArtistsService = _RelatedArtistsService_;
    }));

    it('should do something', function () {
      expect(!!RelatedArtistsService).toBe(true);
    });

  });
});
