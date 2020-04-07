genApp.controller('listCtrl', ['$scope', 'genActionsService', function ($scope, genActionsService) {
    $scope.generators = genActionsService.getGenerators();

    $scope.pauseHandler = function (idx) {
        let currentGenerator = $scope.generators[idx];
        if (currentGenerator.isWorking) {
            currentGenerator.pause();
        } else {
            currentGenerator.start();
        }
    }
    $scope.deleteHandler = function (idx) {
        $scope.generators.splice(idx, 1);
    }
}]);