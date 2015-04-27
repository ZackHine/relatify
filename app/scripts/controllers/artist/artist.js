(function() {
  'use strict';

  define([], function () {

    var ngDependencies = [
      '$scope',
      'RelatedArtistsService',
      'PossibleSongsService'
    ];

    /**
     * @ngdoc function
     * @name relatifyApp.controller:ArtistCtrl
     * @description
     * # ArtistCtrl
     * Controller of the relatifyApp
     */
    var Constructor = function($scope, RelatedArtistsService, PossibleSongsService) {
      var self = this;

      self.model = {};
      self.model.loadedOnce = false;
      self.model.relatedArtists = null;
      self.model.selectedArtists = {};

      self.breakpoints = [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }, {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ];

      self.searchArtist = function(query) {
        self.model.selectedArtists = {};

        if(!query || query.length === 0) {
          self.model.relatedArtists = null;
          RelatedArtistsService.clearRelatedArtists();
          PossibleSongsService.removeAllArtists();
          PossibleSongsService.clearAllSelectedSongs();
        } else {
          self.model.relatedArtists = null;
          RelatedArtistsService.getRelatedArtists(query.trim()).then(function(relatedArtists) {
            if(!self.model.loadedOnce) {
              self.model.relatedArtists = relatedArtists;
              self.model.loadedOnce = true;
            } else {
              $scope.$evalAsync(function(){
                self.model.relatedArtists = relatedArtists;
              });
            }
            PossibleSongsService.removeAllArtists();
            PossibleSongsService.clearAllSelectedSongs();
          }).catch(function(err) {
            console.log(err.message);
            PossibleSongsService.removeAllArtists();
            PossibleSongsService.clearAllSelectedSongs();
          });
        }
      };

      self.clearAllArtists = function() {
        self.model.artistName = null;
        self.model.relatedArtists = null;
        self.model.selectedArtists = {};
        RelatedArtistsService.clearRelatedArtists();
        PossibleSongsService.removeAllArtists();
        PossibleSongsService.clearAllSelectedSongs();
      };

      self.clickedArtistCheckbox = function(artist) {
        if(self.model.selectedArtists[artist.id] === true) {// checkbox is selected
          PossibleSongsService.addArtist(artist);
        } else {// not selected
          PossibleSongsService.removeArtist(artist);
        }
      };

      self.selectAllArtists = function() {
        var artists = [];
        for(var i = 0; i < self.model.relatedArtists.length; ++i) {
          var artist = self.model.relatedArtists[i];
          self.model.selectedArtists[artist.id] = true;
          artists.push(artist);
        }
        PossibleSongsService.addArtists(artists);
      };
    };

    Constructor.$inject = ngDependencies;

    return Constructor;
  });
})();

