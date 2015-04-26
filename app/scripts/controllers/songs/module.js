/**
 * Created by Zack on 4/12/2015.
 */
(function() {
  'use strict';

  define([
    'angular',
    'relatify.app.songs/songs',
    'relatify.app.services/possiblesongsservice',
    'relatify.app.services/previewsongservice',
    'relatify.app.services/spotifyuserservice'
  ], function (
    angular,
    SongsController,
    PossibleSongsService,
    PreviewSongService,
    SpotifyUserService
  ) {

    return angular.module('relatifyApp.controllers.SongsCtrl', ['spotify'])
      .controller('SongsCtrl', SongsController)
      .service('PossibleSongsService', PossibleSongsService)
      .service('PreviewSongService', PreviewSongService)
      .service('SpotifyUserService', SpotifyUserService);
  });
})();
