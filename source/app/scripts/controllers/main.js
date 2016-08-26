'use strict';

/**
 * @ngdoc function
 * @name sourceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sourceApp
 */
angular.module('sourceApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
