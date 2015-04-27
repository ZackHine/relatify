/*jshint unused: vars */
define(['angular',
  'angular-mocks',
  'app',
  'relatify.app.services/spotifyuserservice',
  'relatify.app.services/possiblesongsservice',
  'relatify.app.services/previewsongservice',
  'relatify.app.services/relatedartistsservice',
  'relatify.app.services/spotifyplaylistservice'], function(angular, mocks, app, SpotifyUserService, PossibleSongsService, PreviewSongService, RelatedArtistService, SpotifyPlaylistService) {
  'use strict';

  describe('Controller: PlaylistCtrl', function () {

    // load the controller's module
    beforeEach(module('relatifyApp.controllers.PlaylistCtrl'));

    var PlaylistCtrl,
      scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      PlaylistCtrl = $controller('PlaylistCtrl', {
        $scope: scope
      });
    }));

    it('should be defined', function () {
      expect(PlaylistCtrl).toBeDefined();
    });
  });
});
