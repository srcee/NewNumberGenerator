genApp.directive('randomNumDisplay', [function () {
    return {
        restrict: 'A',
        templateUrl: '../views/directives/randomNumDisplayView.html',
        link: function (scope, element, attr) {

            scope.name = attr.name;
            scope.color = attr.color;

            scope.col = {
                color: scope.color
            };
            scope.pos = {
                backgroundColor: scope.color,
                top: Math.floor((Math.random() * ((window.innerHeight - 100) - 100)) + 100) + 'px',
                left: Math.floor((Math.random() * ((window.innerWidth - 100) - 200)) + 200) + 'px',
            };
        }
    };
}]);