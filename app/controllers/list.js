genApp.controller('listCtrl', ['$scope', 'actions', function ($scope, actions) {
    $scope.generators = actions.getGenerators();

    $scope.pauseHandler = function (idx) {
        if ($scope.generators[idx].isWorking) {
            $scope.generators[idx].pause();
        } else {
            $scope.generators[idx].resume();
        }
    }


}]);