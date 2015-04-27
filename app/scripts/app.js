/*jshint unused: vars */
var appPaths = {
  'relatify.app.main': 'controllers/main',
  'relatify.app.artist': 'controllers/artist',
  'relatify.app.songs': 'controllers/songs',
  'relatify.app.playlist': 'controllers/playlist',
  'relatify.app.spotifyplaylist': 'controllers/spotifyplaylist',
  'relatify.app.drawer': 'controllers/drawer',
  'relatify.app.services': 'services'
};
require.config({paths:appPaths});

define(['angular', 'relatify.app.main/main', 'relatify.app.artist/module', 'relatify.app.songs/module', 'relatify.app.playlist/module', 'relatify.app.spotifyplaylist/module', 'relatify.app.drawer/module', 'relatify.app.services/spotifyuserservice', 'relatify.app.services/spotifyplaylistservice', 'relatify.app.services/possiblesongsservice']/*deps*/, function (angular, MainController, artistModule, songsModule, playlistModule, spotifyPlaylistModule, drawerModule, SpotifyUserService, SpotifyPlaylistService, PossibleSongsService)/*invoke*/ {
  'use strict';

  /**
   * @ngdoc overview
   * @name relatifyApp
   * @description
   * # relatifyApp
   *
   * Main module of the application.
   */
  return angular
    .module('relatifyApp', [
      artistModule.name,
      songsModule.name,
      playlistModule.name,
      spotifyPlaylistModule.name,
      drawerModule.name,
      /*angJSDeps*/
      'ngCookies',
      'ngResource',
      'ngSanitize',
      'ngRoute',
      'ngAnimate',
      'ngTouch',
      'spotify',
      'ngMaterial'
  ])
    .config(function (SpotifyProvider) {
      SpotifyProvider.setClientId('YOUR-CLIENT-ID');
      SpotifyProvider.setRedirectUri('http://localhost:9000/callback.html');
      SpotifyProvider.setScope('user-read-private playlist-read-private playlist-modify-private playlist-modify-public');
    })
    .controller('MainCtrl', MainController)
    .service('SpotifyUserService', SpotifyUserService)
    .service('SpotifyPlaylistService', SpotifyPlaylistService)
    .service('PossibleSongsService', PossibleSongsService);
});
