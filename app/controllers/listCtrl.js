genApp.controller('listCtrl', [
    '$scope',
    '$rootScope',
    'genActionsService',
    'eventsConstant',
    'dialogWindowMessagesConstant',
    'detailsViewsConstant',
    function (
        $scope,
        $rootScope,
        genActionsService,
        eventsConstant,
        dialogWindowMessagesConstant,
        detailsViewsConstant
    ) {
        $scope.generators = genActionsService.getAllGenerators();
        $scope.disabledBtn = genActionsService.hasHiddenGeneratorsChecker();
        $scope.defaultDisplayType = detailsViewsConstant.byDefault.name;

        $scope.pauseHandler = function (idx) {
            let currentGenerator = $scope.generators[idx];
            if (currentGenerator.isWorking) {
                currentGenerator.pause();
            } else {
                currentGenerator.start();
            }
        };


        $scope.deleteHandler = function (idx) {
            let currentGenerator = $scope.generators[idx]
            let dialogInfo = {
                confirmHandler: () => genActionsService.deleteGenerator(idx),
                messageHtmlUrl: './templates/directives/dialogWindowViews/genInfoPartial.html',
                containerName: dialogWindowMessagesConstant.delete.generator.containerName,
                headerMessage: dialogWindowMessagesConstant.delete.generator.headerMessage,
                message: {
                    name: currentGenerator.name,
                    createDate: currentGenerator.timeOfCreation,
                    generatedNumbers: currentGenerator.listOfNumbers.length,
                    count: currentGenerator.count
                }
            };

            $rootScope.$broadcast(eventsConstant.onDialogShown, dialogInfo);
        };

        $scope.hideHandler = function (idx) {
            genActionsService.hideGen(idx);
            $scope.disabledBtn = genActionsService.hasHiddenGeneratorsChecker();
        };

        $scope.showAllHandler = function () {
            genActionsService.showGen();
            $scope.disabledBtn = genActionsService.hasHiddenGeneratorsChecker();
        };
    }]);