(function() {
  'use strict';

  define([], function () {

    var ngDependencies = [
      'Spotify',
      'SpotifyUserService',
      'SpotifyPlaylistService',
      'PossibleSongsService'
    ];

    /**
     * @ngdoc function
     * @name relatifyApp.controller:MainCtrl
     * @description
     * # MainCtrl
     * Controller of the relatifyApp
     */
    var Constructor = function(Spotify, SpotifyUserService, SpotifyPlaylistService, PossibleSongsService) {
      var self = this;
      self.model = {};
      self.model.loggedInUser = (SpotifyUserService.getAccessToken() !== '') ? true : null;
      self.model.loggedInPlaylists = null;
      self.drawerOpen = false;

      self.checkLogin = function() {
        var accessToken = SpotifyUserService.getAccessToken();
        Spotify.setAuthToken(accessToken);
        SpotifyUserService.getCurrentUser().then(function(user) {
          self.model.loggedInUser = user;
          SpotifyPlaylistService.getUserPlaylists(self.model.loggedInUser).then(function(playlists) {
            self.model.loggedInPlaylists = playlists;
          }).catch(function(error) {
            console.log(error.msg);
          });
        }).catch(function(error) {
          console.log(error.message);
        });
      };

      self.login = function() {
        Spotify.login().then(function (data) {
          return data;
        }, function(err) {
          console.log(err.error.msg);
        }).then(function() {
          SpotifyUserService.getCurrentUser().then(function(user) {
            self.model.loggedInUser = user;
            SpotifyPlaylistService.getUserPlaylists(self.model.loggedInUser).then(function(playlists) {
              self.model.loggedInPlaylists = playlists;
            }).catch(function(error) {
              console.log(error.msg);
            });
          }).catch(function(error) {
            console.log(error.msg);
          });
        });
      };

      self.openCloseDrawer = function() {
        self.drawerOpen = !self.drawerOpen;
      };

      self.showDrawer = function() {
        return self.drawerOpen;
      };

      self.songsAreSelected = function() {
        return PossibleSongsService.getNumberSongsSelected() > 0;
      };

      var internal = {
        init: function() {
          self.checkLogin();
        }
      };

      internal.init();
    };

    Constructor.$inject = ngDependencies;
    return Constructor;
  });
})();

