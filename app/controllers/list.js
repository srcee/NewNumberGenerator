genApp.controller('listCtrl', ['$scope', 'actions', function ($scope, actions) {
    $scope.generators = actions.getGenerators();

    $scope.pauseHandler = function (idx) {
        let currentGenerator = $scope.generators[idx];
        if (currentGenerator.isWorking) {
            currentGenerator.pause();
        } else {
            currentGenerator.start();
        }
    }
}]);