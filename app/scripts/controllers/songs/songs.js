(function() {
  'use strict';

  define([], function () {

    var ngDependencies = [
      '$scope',
      'PossibleSongsService',
      'PreviewSongService',
    ];

    /**
     * @ngdoc function
     * @name relatifyApp.controller:SongsCtrl
     * @description
     * # SongsCtrl
     * Controller of the relatifyApp
     */
    var Constructor = function($scope, PossibleSongsService, PreviewSongService) {
      var self = this;

      self.model = {};
      self.model.songs = PossibleSongsService.getPossibleSongs();

      self.showSongs = function() {
        return PossibleSongsService.getPossibleSongs().length > 0;
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

      self.stopSong = function() {
        PreviewSongService.stopSong();
      };

      self.songInPlaylist = function(song) {
        return PossibleSongsService.isSongSelected(song);
      };

      self.selectSong = function(song) {
        if(!PossibleSongsService.isSongSelected(song)) {
          PossibleSongsService.selectSong(song);
        } else {
          PossibleSongsService.unSelectSong(song);
        }
      };
    };

    Constructor.$inject = ngDependencies;

    return Constructor;
  });
})();
