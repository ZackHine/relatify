/**
 * Created by Zack on 4/12/2015.
 */
(function() {
  'use strict';

  define([], function () {

    var ngDependencies = [

    ];

    /**
     * @ngdoc service
     * @name relatifyApp.PreviewSongService
     * @description
     * # PreviewSongService
     * Service in the relatifyApp.
     */
    var Constructor = function() {
      var self = this;

      var currentSong = null;
      var audio = new Audio();

      self.previewSong = function(song) {
        if(song !== currentSong && currentSong !== null) {
          currentSong.currentlyPlaying = false;
        }

        if(song.currentlyPlaying === true) {
          self.stopSong(song);
          return null;
        } else {
          /*jshint camelcase: false */
          audio.src = song.preview_url;
          audio.volume = 0.2;
          audio.play();
          currentSong = song;
          song.currentlyPlaying = true;
          return audio;
        }
      };

      self.stopSong = function(song) {
        audio.pause();
        currentSong = null;
        song.currentlyPlaying = false;
      };

      self.removeCurrentSong = function() {
        currentSong = null;
      };
    };

    Constructor.$inject = ngDependencies;

    return Constructor;
  });
})();
