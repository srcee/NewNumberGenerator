genApp.controller('listCtrl', ['$scope', 'genFactory', function ($scope, genFactory) {
    $scope.generators = genFactory.getGenerators();

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