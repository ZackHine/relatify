(function() {
  'use strict';

  define([], function () {

    var ngDependencies = [
      'Spotify',
      '$q'
    ];

    /**
     * @ngdoc service
     * @name relatifyApp.RelatedArtistsService
     * @description
     * # RelatedArtistsService
     * Service in the relatifyApp.
     */
    var Constructor = function(Spotify, $q) {
      var self = this;
      var relatedArtists = null;
      var searchedArtistName = null;

      self.getRelatedArtists = function(artistName) {
        var deferred = $q.defer();

        Spotify.search(artistName, 'artist').then(function (data) {
          var artists = data.artists;
          if(artists.items && artists.items.length > 0) {
            return artists.items[0];
          } else {
            return null;
          }
        }, function(err) {
          relatedArtists = null;
          searchedArtistName = null;
          deferred.reject(err.error);
        }).then(function(artist) {
          if(artist !== null && artist !== undefined) {
            Spotify.getRelatedArtists(artist.id).then(function (data) {
              relatedArtists = data.artists;
              relatedArtists.unshift(artist);
              searchedArtistName = artistName;
              deferred.resolve(relatedArtists);
            });
          } else {
            relatedArtists = null;
            searchedArtistName = null;
            deferred.resolve(relatedArtists);
          }
        });

        return deferred.promise;
      };

      self.clearRelatedArtists = function() {
        relatedArtists = null;
        searchedArtistName = null;
      };

      self.getSearchedArtistName = function() {
        return searchedArtistName;
      };
    };

    Constructor.$inject = ngDependencies;

    return Constructor;
  });
})();

