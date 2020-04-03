genApp.controller('numsViewCtrl', ['$scope', 'actions', function ($scope, actions) {

    $scope.generators = actions.getGenerators();

    $scope.position = {
        top: 0,
        left: 0
    };

    $scope.generatePosition = function () {
        $scope.pos.top = Math.random() * 400 + "px";
        $scope.pos.left = Math.random() * 500 + "px";
    }
}])