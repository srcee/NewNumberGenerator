genApp.directive('numberDisplay', ['detailsViewsConstant', function (detailsViewsConstant) {
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

            if (attr.type === detailsViewsConstant.random.name) {
                scope.num = {
                    backgroundColor: attr.color,
                    top: Math.floor((Math.random() * (95 - 1)) + 1) + '%',
                    left: Math.floor((Math.random() * (95 - 1)) + 1) + '%',
                };

            } else {
                scope.num = {
                    backgroundColor: attr.color
                };
            }

        }
    };
}]);