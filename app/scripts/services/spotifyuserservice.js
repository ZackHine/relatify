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
     * @name relatifyApp.SpotifyUserService
     * @description
     * # SpotifyUserService
     * Service in the relatifyApp.
     */
    var Constructor = function(Spotify, $q) {
      var self = this;
      var currentUser = null;

      self.getCurrentUser = function() {
        var deferred = $q.defer();

        if(!currentUser) {
          Spotify.getCurrentUser().then(function(user) {
            currentUser = user;
            deferred.resolve(currentUser);
          }, function(err) {
            deferred.reject(err.error);
          });
        } else {
          deferred.resolve(currentUser);
        }

        return deferred.promise;
      };

      self.isUserLoggedIn = function() {
        return currentUser !== null;
      };

      self.logOutCurrentUser = function() {
        // TODO: Need to clear cookies or something and then make sure currentUser goes to null
      };

      self.getAccessToken = function() {
        var expires = +localStorage.getItem('spotify-expires');
        if ((new Date()).getTime() > expires) {
          return '';
        }
        return localStorage.getItem('spotify-token');
      };
    };

    Constructor.$inject = ngDependencies;

    return Constructor;
  });
})();

