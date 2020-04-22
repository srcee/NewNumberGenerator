genApp.controller('numsViewCtrl', [
    '$rootScope',
    '$scope',
    'genActionsService',
    'eventsConstant',
    'detailsViewsConstant',
    'dialogWindowMessagesConstant',
    function (
        $rootScope,
        $scope,
        genActionsService,
        eventsConstant,
        detailsViewsConstant,
        dialogWindowMessagesConstant
    ) {
        $scope.generators = genActionsService.getAllGenerators();
        $scope.type = detailsViewsConstant.random.name;

        $scope.deleteNumHandler = function (idx, generator) {

            let currentNum = generator.listOfNumbers[idx];
            let dialogInfo = {
                confirmHandler: () => genActionsService.deleteNumber(idx, generator),
                messageHtmlUrl: './templates/directives/deleteDialogViews/numInfoPartial.html',
                containerName: dialogWindowMessagesConstant.delete.number.containerName,
                headerMessage: dialogWindowMessagesConstant.delete.number.headerMessage,
                message: {
                    value: currentNum.value,
                    generateDate: currentNum.timeOfGeneration,
                }
            };

            $rootScope.$broadcast(eventsConstant.onDialogShown, dialogInfo);
        };
    }])