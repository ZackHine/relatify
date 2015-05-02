(function() {
  'use strict';

  define([], function () {

    var ngDependencies = [
      'Spotify',
      '$q',
      'SpotifyUserService'
    ];

    /**
     * @ngdoc service
     * @name relatifyApp.PossibleSongsService
     * @description
     * # PossibleSongsService
     * Service in the relatifyApp.
     */
    var Constructor = function(Spotify, $q, SpotifyUserService) {
      var self = this;
      var songs = [];
      var artistIdMap = {};
      var numSelected = 0;
      var selectedSongMap = {};
      var currentOrderSelected = 0;

      self.addArtist = function(artist) {
        Spotify.getArtistTopTracks(artist.id, 'US').then(function (data) {
          artistIdMap[artist.id] = true;
          for(var i = 0; i < data.tracks.length; ++i) {
            songs.push(data.tracks[i]);
          }
        }, function(err) {
          console.log(err.error.msg);
        });
      };

      self.addArtists = function(artists) {
        var defer = $q.defer();
        var promises = [];

        function addArtist(values){
          for(var i = 0; i < values.length; ++i) {
            for(var j = 0; j < values[i].tracks.length; ++j) {
              var track = values[i].tracks[j];
              if(!artistIdMap[track.artists[0].id]) {
                songs.push(track);
              }
            }
          }
          defer.resolve();
        }

        angular.forEach(artists, function(artist){
          promises.push(Spotify.getArtistTopTracks(artist.id, 'US'));
        });

        $q.all(promises).then(addArtist);

        return defer;
      };

      self.removeArtist = function(artist) {
        var foundArtist = false;
        for(var i = 0; i < songs.length; ++i) {
          if(songs[i].artists[0].id === artist.id) {
            foundArtist = true;
            songs.splice(i, 1);
            --i;
          } else if(foundArtist === true) {// all songs for any artist will be right next to each other
            break;
          }
        }

        if(foundArtist === true) {
          artistIdMap[artist.id] = false;
        }
      };

      self.removeAllArtists = function() {
        songs.length = 0;
        artistIdMap = {};
      };

      self.getPossibleSongs = function() {
        return songs;
      };

      self.selectSong = function(song) {
        selectedSongMap[song.id] = song;
        song.orderSelected = ++currentOrderSelected;
        ++numSelected;
      };

      self.unSelectSong = function(song) {
        delete selectedSongMap[song.id];
        --numSelected;
      };

      self.getNumberSongsSelected = function() {
        return numSelected;
      };

      self.isSongSelected = function(song) {
        return selectedSongMap[song.id] !== undefined;
      };

      self.clearAllSelectedSongs = function() {
        for (var member in selectedSongMap) {
          if(selectedSongMap.hasOwnProperty(member)) {
            delete selectedSongMap[member];
          }
        }
        numSelected = 0;
        currentOrderSelected = 0;
      };

      self.getSelectedSongs = function() {
        return selectedSongMap;
      };

      self.savePlaylist = function(playlistName) {
        var deferred = $q.defer();
        var currentUser = null;

        if(numSelected < 1) {
          deferred.reject({msg : 'No songs selected'});
        } else {
          SpotifyUserService.getCurrentUser().then(function(user) {
            currentUser = user;
            return user;
          }, function(err) {
            console.log(err.message);
            deferred.reject(err);
          }).then(function(currentUser) {
            return Spotify.createPlaylist(currentUser ? currentUser.id : null, {name: playlistName, public: true});
          }, function(err) {
            console.log(err.message);
            deferred.reject(err);
          }).then(function(playlist) {
            var trackStr = '';
            for(var i = 0; i < songs.length; ++i) {
              if(selectedSongMap[songs[i].id]) {
                if(trackStr !== '') {
                  trackStr += ',spotify:track:'+songs[i].id;
                } else {
                  trackStr += 'spotify:track:'+songs[i].id;
                }
              }
            }
            return Spotify.addPlaylistTracks(currentUser ? currentUser.id : null, playlist ? playlist.id : null, trackStr);
          }, function(err) {
            console.log(err.message);
            deferred.reject(err);
          }).then(function(data) {
            deferred.resolve(data);
          }, function(err) {
            console.log(err.message);
            deferred.reject(err);
          });
        }

        return deferred.promise;
      };
    };

    Constructor.$inject = ngDependencies;

    return Constructor;
  });
})();

