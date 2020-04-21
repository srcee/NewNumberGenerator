genApp.directive('randomNumDisplay', [function () {
    return {
        restrict: 'A',
        templateUrl: '../templates/directives/numberDisplayView.html',
        scope: {},
        link: function (scope, element, attr) {

            scope.value = attr.value;
            scope.name = attr.name;
            scope.col = {
                color: attr.color
            };

            scope.num = {
                backgroundColor: attr.color,
                top: Math.floor((Math.random() * ((window.innerHeight - 100) - 100)) + 100) + 'px',
                left: Math.floor((Math.random() * ((window.innerWidth - 100) - 200)) + 200) + 'px',
            };
        }
    };
}]);