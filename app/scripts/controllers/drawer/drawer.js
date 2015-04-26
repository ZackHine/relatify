(function() {
  'use strict';

  define([], function () {

    var ngDependencies = [
      'SpotifyUserService'
    ];

    /**
     * @ngdoc function
     * @name relatifyApp.controller:DrawerCtrl
     * @description
     * # DrawerCtrl
     * Controller of the relatifyApp
     */
    var Constructor = function(SpotifyUserService) {
      var self = this;

      self.isUserLoggedIn = function() {
        return SpotifyUserService.isUserLoggedIn();
      };
    };

    Constructor.$inject = ngDependencies;

    return Constructor;
  });
})();

