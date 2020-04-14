genApp.directive('detailsDisplay', function () {
    return {
        restrict: 'A',
        templateUrl: '../views/directives/detailsDisplayView.html',
        link: function (scope) {
            scope.bgCol = {
                backgroundColor: scope.color,
            };

            scope.col = {
                color: scope.color
            };
        }
    };
});