'use strict';

/**
 * @ngdoc function
 * @name cursoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cursoApp
 */
/*
angular.module('cursoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
*/

//** Para presentar datos en pantalla utilizamos mejor this que $scope que carga más la MEMO**///
/*
angular.module('cursoApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
*/

angular.module('cursoApp')
  .controller('MainCtrl', ['$scope', function(scope) { 
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        this.borrarElemento = function(dato){
            var index = this.awesomeThings.indexOf(dato);
            this.awesomeThings.splice(index,1);
        };
        scope.mensaje = "Eooo Scope de mensaje!"; 
     }]
  );

