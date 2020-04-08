genApp.controller('detailsCtrl', ['$scope', '$routeParams', 'genActionsService', function ($scope, $routeParams, genActionsService) {

    $scope.currentGenerator = genActionsService.getGeneratorsById($routeParams.id);
    $scope.list = $scope.currentGenerator.listOfNumbers;
    $scope.display = 'normal';

    $scope.normalHandler = function () {
        $scope.display = 'normal';
    };
    $scope.randomHandler = function () {
        $scope.display = 'random';
    };

    $scope.sortedHandler = function () {
        $scope.sortedList = $scope.currentGenerator.listOfNumbers.slice();
        $scope.sortedList.sort((a, b) => a - b);
        $scope.display = 'sorted';
    };

    $scope.deleteNumHandler = function (idx) {
        genActionsService.deleteNumber(idx, $scope.currentGenerator);
    };

    $scope.pause = function () {
        $scope.currentGenerator.pause();
    }

    $scope.resume = function () {
        $scope.currentGenerator.start();
    }
}])