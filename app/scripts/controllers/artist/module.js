/**
 * Created by Zack on 4/11/2015.
 */
(function() {
  'use strict';

  define([
    'angular',
    'relatify.app.artist/artist',
    'relatify.app.services/relatedartistsservice',
    'relatify.app.services/possiblesongsservice'
  ], function (
    angular,
    ArtistController,
    RelatedArtistsService,
    PossibleSongsService
  ) {

    return angular.module('relatifyApp.controllers.ArtistCtrl', ['spotify', 'slick'])
      .controller('ArtistCtrl', ArtistController)
      .service('RelatedArtistsService', RelatedArtistsService)
      .service('PossibleSongsService', PossibleSongsService);
  });
})();


