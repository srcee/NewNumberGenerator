genApp.controller('listCtrl', ['$scope', 'actions', function ($scope, actions) {
    $scope.generators = actions.getGenerators();
}]);