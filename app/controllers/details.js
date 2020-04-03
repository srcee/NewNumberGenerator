genApp.controller('detailsCtrl', ['$scope', '$routeParams', 'actions', function ($scope, $routeParams, actions) {

    $scope.currentGenerator = actions.getGenerators()[$routeParams.id]
    $scope.list = $scope.currentGenerator.listOfNumbers;
}])