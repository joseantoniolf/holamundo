'use strict';

/**
 * @ngdoc function
 * @name cursoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cursoApp
 */
angular.module('cursoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
