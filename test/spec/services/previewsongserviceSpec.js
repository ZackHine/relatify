/**
 * Created by Zack on 4/30/2015.
 */
define(['angular',
  'angular-mocks',
  'app'], function(angular, mocks, app) {
  'use strict';

  describe('Service: PreviewSongService', function () {

    //// load the service's module
    beforeEach(module('relatifyApp'));

    // instantiate service
    var PreviewSongService, audioOriginal, audioMock;

    beforeEach(function() {
      audioOriginal = window.Audio;
      audioMock = {};
      audioMock.play = function(){};
      audioMock.pause = function(){};
      window.Audio = function() { return audioMock; };
    });

    afterEach(function() {
      window.Audio = audioOriginal;
    });

    beforeEach(inject(function (_PreviewSongService_) {
      PreviewSongService = _PreviewSongService_;
    }));

    it('should be defined', function () {
      expect(PreviewSongService).toBeDefined();
    });

  });
});
