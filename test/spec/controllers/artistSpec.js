/*jshint unused: vars */
define(['angular',
  'angular-mocks',
  'app',
  'spotify',
  'jquery',
  'slick-carousel',
  'angular-slick',
  'relatify.app.services/spotifyuserservice'], function(angular, mocks, app, Spotify, $, slickCarousel, angularSlick) {
  'use strict';

  describe('Controller: ArtistCtrl', function () {

    // load the controller's module
    beforeEach(module('relatifyApp.controllers.ArtistCtrl'));

    var ArtistCtrl,
      scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      ArtistCtrl = $controller('ArtistCtrl', {
        $scope: scope
      });
    }));

    it('should be defined', function () {
      expect(ArtistCtrl).toBeDefined();
    });
  });
});
