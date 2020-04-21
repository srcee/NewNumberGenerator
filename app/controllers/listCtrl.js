genApp.controller('listCtrl', [
    '$scope',
    '$rootScope',
    'genActionsService',
    'eventsConstant',
    function (
        $scope,
        $rootScope,
        genActionsService,
        eventsConstant
    ) {
        $scope.generators = genActionsService.allGenerators;
        $scope.disabledBtn = genActionsService.hasHiddenGeneratorsChecker();


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
                messageHtmlUrl: './templates/directives/deleteDialogViews/genInfoPartial.html',
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