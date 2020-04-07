genApp.controller('detailsCtrl', ['$scope', '$routeParams', 'genActionsService', function ($scope, $routeParams, genActionsService) {

    $scope.currentGenerator = genActionsService.getGeneratorsById($routeParams.id);
    $scope.list = $scope.currentGenerator.listOfNumbers;

    $scope.normalHandler = function () {

    };

    $scope.filteredHandler = function () {

    };

    $scope.randomHandler = function () {

    };
}])