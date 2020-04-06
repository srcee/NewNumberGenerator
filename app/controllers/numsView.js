genApp.controller('numsViewCtrl', ['$scope', 'genFactory', function ($scope, genFactory) {
    $scope.generators = genFactory.getGenerators();
}])