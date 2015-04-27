/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app', 'angular-cookies', 'angular-resource', 'angular-animate', 'angular-touch', 'angular-sanitize', 'angular-route', 'spotify',
  'jquery',
  'slick-carousel',
  'angular-slick',
  'angular-aria',
  'angular-material'], function(angular, mocks, app, ngCookies, ngResource, ngAnimate, ngTouch, ngSanitize, ngRoute) {
  'use strict';

  describe('Controller: MainCtrl', function () {

    // load the controller's module
    beforeEach(module('relatifyApp'));

    var MainCtrl,
      scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      MainCtrl = $controller('MainCtrl', {
        $scope: scope
      });
    }));

    it('should be defined', function () {
      expect(MainCtrl).toBeDefined();
    });
  });
});
