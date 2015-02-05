var app = angular.module('cursoApp');

var fnDirectiva = function () {
    var resultado = {};
    //Usos en el HTML A: Atributo, E: Elemento, M:comentario
    resultado.restrict = 'AE';
    resultado.replace = 'true';
    resultado.template = '<p>Hecho poco a poco...</p>';
    //** Mejor esto... resultado.template.url = '';
    return resultado;
};

app.directive('jvCreditos', fnDirectiva);


app.directive('jvColores',function () {
    //var $elem =  = angular.element(elem);
    var colorear = function(scope,elem){
        // Se pueden utilizar las dos: (mejor la segunda)
        //elem[0].style.background = 'red';
        elem.css('background-color','red');
    };
    
    return{
        restrict: 'AE',
        link: colorear
    };
};
         
app.directive('jvColores2',function () {
                      var $ = angular.element;
        var colors = ['#FFAA00', '#FFD300', '#531DFF', '#1A60FF', '#FFCF70', '#FFE670', '#9E80FF'];

        var replaceWithColors = function(element) {
            var originalText = element.text();
            var $newContent = $('<span>');
            for (var i=0; i < originalText.length; i++) {
                var colorIdx = i % colors.length;
                var char = originalText.charAt(i);
                $newContent.append(
                    $('<span>').css('color', colors[colorIdx]).text(char)
                );
            }
            element.html($newContent);
        };

        return {
            restrict: 'AE',
            link : function(scope, element, attrs) {
                replaceWithColors(element);
            }
        };
};