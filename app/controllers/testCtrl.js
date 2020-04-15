genApp.controller('testCtrl', ['$scope', 'genActionsService', function ($scope, genActionsService) {


    $scope.info = {
        a: 2,
        b: 3
    };
    $scope.show = true;
    $scope.clicker = function () {
        $scope.show = false;
    }

    $scope.cancelHandler = function (e) {
        if (e.target.id === 'cancel') {
            $scope.show = true;
        }
    }

    // $scope.generators = genActionsService.getAllLocalStorage();
    // $scope.disabledBtn = genActionsService.hasHiddenGeneratorsChecker();

    // $scope.pauseHandler = function (idx) {
    //     let currentGenerator = $scope.generators[idx];
    //     if (currentGenerator.isWorking) {
    //         currentGenerator.pause();
    //     } else {
    //         currentGenerator.start();
    //     }
    // };

    // $scope.deleteHandler = function (idx) {
    //     $scope.generators.splice(idx, 1);
    // };

    // $scope.hideHandler = function (idx) {
    //     genActionsService.hideGen(idx);
    //     $scope.disabledBtn = true;
    // };
    // $scope.showAllHandler = function () {
    //     genActionsService.showGen();
    //     $scope.disabledBtn = false;
    // };
}])