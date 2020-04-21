genApp.controller('numsViewCtrl', [
    '$rootScope',
    '$scope',
    'genActionsService',
    'eventsConstant',
    function (
        $rootScope,
        $scope,
        genActionsService,
        eventsConstant
    ) {
        $scope.generators = genActionsService.allGenerators;

        $scope.deleteNumHandler = function (idx, generator) {

            let currentNum = generator.listOfNumbers[idx];
            let dialogInfo = {
                confirmHandler: () => genActionsService.deleteNumber(idx, generator),
                messageHtmlUrl: './templates/directives/deleteDialogViews/numInfoPartial.html',
                message: {
                    value: currentNum.value,
                    generateDate: currentNum.timeOfGeneration,
                }
            };

            $rootScope.$broadcast(eventsConstant.onDialogShown, dialogInfo);
        };
    }])