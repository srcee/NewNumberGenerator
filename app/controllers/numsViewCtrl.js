genApp.controller('numsViewCtrl', [
    '$rootScope',
    '$scope',
    'genActionsService',
    'eventsConstant',
    'detailsViewsConstant',
    function (
        $rootScope,
        $scope,
        genActionsService,
        eventsConstant,
        detailsViewsConstant
    ) {
        $scope.generators = genActionsService.getAllGenerators();
        $scope.type = detailsViewsConstant.random.name;

        $scope.deleteNumHandler = function (idx, generator) {

            let currentNum = generator.listOfNumbers[idx];
            let dialogInfo = {
                confirmHandler: () => genActionsService.deleteNumber(idx, generator),
                messageHtmlUrl: './templates/directives/deleteDialogViews/numInfoPartial.html',
                containerName: 'DELETE NUMBER CONFIRMATION',
                headerMessage: 'Are to sure you want to delete this number?',
                message: {
                    value: currentNum.value,
                    generateDate: currentNum.timeOfGeneration,
                }
            };

            $rootScope.$broadcast(eventsConstant.onDialogShown, dialogInfo);
        };
    }])