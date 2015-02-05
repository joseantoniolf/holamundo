'use strict';

/**
 * @ngdoc overview
 * @name cursoApp
 * @description
 * # cursoApp
 *
 * Main module of the application.
 */
angular
  .module('cursoApp', [
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl as ctrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/donde',{
         templateUrl: 'views/donde.html'
        })
      .otherwise({
        redirectTo: '/'
      });
  });
