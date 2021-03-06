genApp.directive('dialogWindow', ['$rootScope', '$route', 'eventsConstant', function ($rootScope, $route, eventsConstant) {
    return {
        restrict: 'A',
        templateUrl: '../templates/directives/dialogWindowViews/dialogWindowView.html',
        scope: true,
        link: function (scope) {
            let confirmHandler,
                cancelHandler;

            scope.isShown = false;

            $rootScope.$on(eventsConstant.onDialogShown, function (event, info) {
                confirmHandler = info.confirmHandler;
                cancelHandler = info.cancelHandler;

                scope.msgHtmlUrl = info.messageHtmlUrl;
                scope.containerName = info.containerName
                scope.headerMessage = info.headerMessage;
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
            };
        }
    };
}]);