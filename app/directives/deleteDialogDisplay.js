<<<<<<< HEAD
genApp.directive('deleteDialog', ['$rootScope', 'eventsConstant', function ($rootScope, eventsConstant) {
    return {
        restrict: 'A',
        templateUrl: '../templates/directives/deleteDialogViews/deleteDialogView.html',
        scope: true,
        link: function (scope) {
            let confirmHandler,
                cancelHandler;
            scope.isShown = false;

            $rootScope.$on(eventsConstant.onDialogShown, function (event, info) {
                confirmHandler = info.confirmHandler;
                cancelHandler = info.cancelHandler;
                scope.msgHtmlUrl = info.messageHtmlUrl;
                scope.message = info.message;
                scope.isShown = true;
            });

            scope.confirmHandler = function () {
                scope.isShown = false;
                confirmHandler();
            };

            scope.cancelHandler = function () {
                if (cancelHandler) {
                    cancelHandler();
                }

                scope.isShown = false;
=======
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
>>>>>>> 92dd1ff7143e25a6d0ab05e9ed603c68d5f252a4
            };
        }
    };
}]);