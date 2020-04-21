genApp.directive('detailsDisplay', [function () {
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
            };
        }
    };
}]);