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

<<<<<<< HEAD
=======
        $scope.info;
        $scope.dialog = false;
>>>>>>> 92dd1ff7143e25a6d0ab05e9ed603c68d5f252a4

        $scope.pauseHandler = function (idx) {
            let currentGenerator = $scope.generators[idx];
            console.log(currentGenerator.isWorking);
            if (currentGenerator.isWorking) {
                currentGenerator.pause();
            } else {
                currentGenerator.start();
            }
        };


        $scope.deleteHandler = function (idx) {
<<<<<<< HEAD
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
=======
            $scope.info = { idx: idx };
            $scope.dialog = true;
>>>>>>> 92dd1ff7143e25a6d0ab05e9ed603c68d5f252a4
        };

        $scope.hideHandler = function (idx) {
            genActionsService.hideGen(idx);
        };
        $scope.showAllHandler = function () {
            genActionsService.showGen();
        };
    }]);