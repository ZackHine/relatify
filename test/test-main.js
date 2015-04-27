var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    // Removed "Spec" naming from files
    if (/Spec\.js$/.test(file)) {
      tests.push(file);
    }
  }
}

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/app/scripts',

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
        'angular' : {'exports' : 'angular'},
        'angular-route': ['angular'],
        'angular-cookies': ['angular'],
        'angular-sanitize': ['angular'],
        'angular-resource': ['angular'],
        'angular-animate': ['angular'],
        'angular-touch': ['angular'],
        'angular-mocks': {
          deps:['angular'],
          'exports':'angular.mock'
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

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});

var appPaths = {
  'relatify.app.main': 'controllers/main',
  'relatify.app.artist': 'controllers/artist',
  'relatify.app.songs': 'controllers/songs',
  'relatify.app.playlist': 'controllers/playlist',
  'relatify.app.spotifyplaylist': 'controllers/spotifyplaylist',
  'relatify.app.drawer': 'controllers/drawer',
  'relatify.app.services': 'services'
};
require.config({paths:appPaths});
