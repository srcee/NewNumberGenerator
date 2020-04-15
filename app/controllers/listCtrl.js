genApp.controller('listCtrl', [
    '$scope',
    'genActionsService',
    function (
        $scope,
        genActionsService,
    ) {
        $scope.generators = genActionsService.allGenerators;
        $scope.disabledBtn = genActionsService.hasHiddenGeneratorsChecker();

        $scope.info;
        $scope.dialog = false;

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
            $scope.info = { idx: idx };
            $scope.dialog = true;
        };

        $scope.hideHandler = function (idx) {
            genActionsService.hideGen(idx);
            $scope.disabledBtn = true;
        };
        $scope.showAllHandler = function () {
            genActionsService.showGen();
            $scope.disabledBtn = false;
        };
    }]);