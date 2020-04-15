genApp.directive('deleteDialog', ['$route', 'genActionsService', function ($route, genActionsService) {
    return {
        restrict: 'A',
        templateUrl: '../views/directives/deleteDialogView.html',
        scope: {
            info: '=',
            dialog: '='
        },
        link: function (scope) {
            scope.confirmHandler = function () {
                if ('generator' in scope.info) {
                    genActionsService.deleteNumber(scope.info.idx, scope.info.generator);
                } else {
                    genActionsService.deleteGenerator(scope.info.idx);
                }
                $route.reload();
            };

            scope.cancelHandler = function (event) {
                if (event.target.id === 'cancel') {
                    $route.reload();
                }
            };
        }
    };
}]);