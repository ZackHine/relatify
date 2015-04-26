/**
 * Created by Zack on 4/17/2015.
 */
(function() {
  'use strict';

  define([], function () {

    var ngDependencies = [
      'Spotify',
      '$q'
    ];

    /**
     * @ngdoc service
     * @name relatifyApp.SpotifyPlaylistService
     * @description
     * # SpotifyPlaylistService
     * Service in the relatifyApp.
     */
    var Constructor = function(Spotify, $q) {
      var self = this;
      var currentUserPlaylist = [];

      self.getUserPlaylists = function(user) {
        var deferred = $q.defer();

        if(user === null || user === undefined) {
          deferred.resolve(currentUserPlaylist);
        } else {
          Spotify.getUserPlaylists(user.id).then(function (playlists) {
            if(currentUserPlaylist.length > 0) {
              currentUserPlaylist.length = 0;
            }
            for(var i = 0; i < playlists.items.length; ++i) {
              currentUserPlaylist.push(playlists.items[i]);// always have same object
            }
            deferred.resolve(currentUserPlaylist);
          }, function(err) {
            deferred.reject(err.error);
          });
        }

        return deferred.promise;
      };
    };

    Constructor.$inject = ngDependencies;

    return Constructor;
  });
})();

