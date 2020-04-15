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
                confirmHandler: function () {
                    genActionsService.deleteGenerator(idx);
                },
                message: {
                    name: currentGenerator.name,
                    createDate: currentGenerator.timeOfCreation,
                    generatedNumbers: currentGenerator.listOfNumbers.length,
                    count: currentGenerator.count
                },
                messageHtmlUrl: './templates/directives/deleteDialogViews/genInfoPartial.html'
            }

            $rootScope.$broadcast(eventsConstant.onDialogShown, dialogInfo);
        };

        $scope.hideHandler = function (idx) {
            genActionsService.hideGen(idx);
        };
        $scope.showAllHandler = function () {
            genActionsService.showGen();
        };
    }]);