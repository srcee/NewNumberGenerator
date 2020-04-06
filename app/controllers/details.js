genApp.controller('detailsCtrl', ['$scope', '$routeParams', 'genFactory', function ($scope, $routeParams, genFactory) {

    $scope.currentGenerator = genFactory.getGenerators()[$routeParams.id];
    $scope.list = $scope.currentGenerator.listOfNumbers;
}])