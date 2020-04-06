genApp.controller('numsViewCtrl', ['$scope', 'actions', function ($scope, actions) {
    $scope.generators = actions.getGenerators();
}])