(function() {
  'use strict';

  define([], function () {

    var ngDependencies = [
      'SpotifyPlaylistService',
      'SpotifyUserService'
    ];

    /**
     * @ngdoc function
     * @name relatifyApp.controller:SpotifyPlaylistCtrl
     * @description
     * # SpotifyPlaylistCtrl
     * Controller of the relatifyApp
     */
    var Constructor = function(SpotifyPlaylistService, SpotifyUserService) {
      var self = this;
      self.model = {};

      var internal = {
        getSpotifyPlaylists : function(currentUser) {
          SpotifyPlaylistService.getUserPlaylists(currentUser).then(function(playlists) {
            self.model.playlists = playlists;
          });
        },

        init : function() {
          // TODO: Check if authToken is set; if it's not we are not logged in and we shouldn't even try getCurrentUser(). Should just call getSpotifyPlaylists() with null as param
          SpotifyUserService.getCurrentUser().then(function(currentUser) {
            internal.getSpotifyPlaylists(currentUser);
          }).catch(function() {
            internal.getSpotifyPlaylists(null);
          });
        }
      };

      self.getSpotifyPlaylists = function(currentUser) {
        internal.getSpotifyPlaylists(currentUser);
      };

      internal.init();
    };

    Constructor.$inject = ngDependencies;

    return Constructor;
  });
})();


