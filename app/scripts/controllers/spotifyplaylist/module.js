/**
 * Created by Zack on 4/18/2015.
 */
(function() {
  'use strict';

  define([
    'angular',
    'relatify.app.spotifyplaylist/spotifyplaylist',
    'relatify.app.services/spotifyplaylistservice',
    'relatify.app.services/spotifyuserservice'
  ], function (
    angular,
    SpotifyPlaylistController,
    SpotifyPlaylistService,
    SpotifyUserService
  ) {

    return angular.module('relatifyApp.controllers.SpotifyPlaylistCtrl', ['spotify'])
      .controller('SpotifyPlaylistCtrl', SpotifyPlaylistController)
      .service('SpotifyPlaylistService', SpotifyPlaylistService)
      .service('SpotifyUserService', SpotifyUserService);
  });
})();
