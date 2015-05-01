/**
 * Created by Zack on 4/24/2015.
 */
(function() {
  'use strict';

  define([
    'angular',
    'relatify.app.drawer/drawer',
    'relatify.app.services/spotifyuserservice'
  ], function (
    angular,
    DrawerController,
    SpotifyUserService
  ){

    return angular.module('relatifyApp.controllers.DrawerCtrl', ['spotify'])
      .controller('DrawerCtrl', DrawerController)
      .service('SpotifyUserService', SpotifyUserService);
  });
})();
