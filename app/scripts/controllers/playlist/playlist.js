(function() {
  'use strict';

  define([], function () {

    var ngDependencies = [
      '$scope',
      'PossibleSongsService',
      'PreviewSongService',
      'RelatedArtistsService',
      'SpotifyPlaylistService',
      'SpotifyUserService'
    ];

    /**
     * @ngdoc function
     * @name relatifyApp.controller:PlaylistCtrl
     * @description
     * # PlaylistCtrl
     * Controller of the relatifyApp
     */
    var Constructor = function($scope, PossibleSongsService, PreviewSongService, RelatedArtistsService, SpotifyPlaylistService, SpotifyUserService) {
      var self = this;

      self.model = {};
      self.model.possibleSongs = PossibleSongsService.getPossibleSongs();
      self.model.selectedSongsMap = PossibleSongsService.getSelectedSongs();
      $scope.selectedSongsMap = self.model.selectedSongsMap;// have to add it to scope so I can watch it
      self.model.newPlaylistName = null;
      self.model.numSelectedSongs = 0;
      self.model.currentSearchArtist = null;

      var Constants = {
        RELATIFY: 'relatify'
      };

      self.isSongSelected = function() {
        return function(song) {
          return self.model.selectedSongsMap[song.id];
        };
      };

      self.previewSong = function(song) {
        var audio = PreviewSongService.previewSong(song);
        if(audio !== null) {
          audio.addEventListener('ended', function(){
            $scope.$apply(function() {
              song.currentlyPlaying = false;
              PreviewSongService.removeCurrentSong();
            });
          });
        }
      };

      self.unSelectSong = function(song) {
        PossibleSongsService.unSelectSong(song);
      };

      self.createPlaylist = function(playlistName) {
        if(playlistName && playlistName.trim().length > 0) {
          PossibleSongsService.savePlaylist(playlistName).then(function() {
            PossibleSongsService.clearAllSelectedSongs();
            self.model.newPlaylistName = null;
            return SpotifyUserService.getCurrentUser();
          }, function(error) {
            console.log(error);
          }).then(function(user) {
            SpotifyPlaylistService.getUserPlaylists(user);// don't need to do anything with the results here, just need to make another request
          });
        }
      };

      /**
       * Has any songs been added
       */
      self.songAdded = function() {
        return PossibleSongsService.getNumberSongsSelected() > 0;
      };

      self.isUserLoggedIn = function() {
        return SpotifyUserService.isUserLoggedIn();
      };

      var internal = {
        init: function() {
          $scope.$watch('selectedSongsMap', function(newVal){
            var length = Object.keys(newVal).length;
            if(length > self.model.numSelectedSongs && self.model.numSelectedSongs === 0 && self.model.newPlaylistName === null) {
              self.model.newPlaylistName = Constants.RELATIFY + '-' + RelatedArtistsService.getSearchedArtistName();
            }

            var searchArtistName = RelatedArtistsService.getSearchedArtistName();
            if(length === 0 && (searchArtistName === null || searchArtistName !== self.model.currentSearchArtist)) {// clear button or search button was hit
              self.model.newPlaylistName = null;
            } else {
              if(self.model.numSelectedSongs === 0 && length > 0 && searchArtistName !== self.model.currentSearchArtist) {// search when there were no selected songs
                self.model.newPlaylistName = Constants.RELATIFY + '-' + RelatedArtistsService.getSearchedArtistName();
              }
            }

            self.model.currentSearchArtist = RelatedArtistsService.getSearchedArtistName();
            self.model.numSelectedSongs = length;
          }, true);
        }
      };

      internal.init();
    };

    Constructor.$inject = ngDependencies;

    return Constructor;
  });
})();


