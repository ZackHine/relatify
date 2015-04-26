/*jshint unused: vars */
require.config({
  paths: {
    angular: '../../bower_components/angular/angular',
    jquery: '../../bower_components/jquery/dist/jquery',
    'angular-animate': '../../bower_components/angular-animate/angular-animate',
    'angular-cookies': '../../bower_components/angular-cookies/angular-cookies',
    'angular-mocks': '../../bower_components/angular-mocks/angular-mocks',
    'angular-resource': '../../bower_components/angular-resource/angular-resource',
    'angular-route': '../../bower_components/angular-route/angular-route',
    'angular-sanitize': '../../bower_components/angular-sanitize/angular-sanitize',
    'angular-touch': '../../bower_components/angular-touch/angular-touch',
    bootstrap: '../../bower_components/bootstrap/dist/js/bootstrap',
    spotify: '../../bower_components/angular-spotify/src/angular-spotify',
    'angular-spotify': '../../bower_components/angular-spotify/dist/angular-spotify.min',
    'slick-carousel': '../../bower_components/slick-carousel/slick/slick',
    'angular-slick': '../../bower_components/angular-slick/dist/slick',
    'angular-aria': '../../bower_components/angular-aria/angular-aria',
    'angular-material': '../../bower_components/angular-material/angular-material'
  },
  shim: {
    angular: {
      exports: 'angular'
    },
    'angular-route': [
      'angular'
    ],
    'angular-cookies': [
      'angular'
    ],
    'angular-sanitize': [
      'angular'
    ],
    'angular-resource': [
      'angular'
    ],
    'angular-animate': [
      'angular'
    ],
    'angular-touch': [
      'angular'
    ],
    'angular-mocks': {
      deps: [
        'angular'
      ],
      exports: 'angular.mock'
    },
    spotify: {
      deps: [
        'angular'
      ]
    },
    'angular-slick': {
      deps: [
        'angular',
        'slick-carousel'
      ]
    },
    'slick-carousel': {
      deps: [
        'jquery'
      ]
    },
    'angular-aria': {
      deps: [
        'angular'
      ]
    },
    'angular-material': {
      deps: [
        'angular',
        'angular-animate',
        'angular-aria'
      ]
    }
  },
  priority: [
    'angular'
  ],
  packages: [

  ]
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = 'NG_DEFER_BOOTSTRAP!';

require([
  'angular',
  'app',
  'angular-route',
  'angular-cookies',
  'angular-sanitize',
  'angular-resource',
  'angular-animate',
  'angular-touch',
  'spotify',
  'jquery',
  'slick-carousel',
  'angular-slick',
  'angular-aria',
  'angular-material'
], function(angular, app, ngRoutes, ngCookies, ngSanitize, ngResource, ngAnimate, ngTouch, spotify, $, slickCarousel, angularSlick, angularAria, angularMaterial) {
  'use strict';
  /* jshint ignore:start */
  var $html = angular.element(document.getElementsByTagName('html')[0]);
  /* jshint ignore:end */
  angular.element().ready(function() {
    angular.resumeBootstrap([app.name]);
  });
});
