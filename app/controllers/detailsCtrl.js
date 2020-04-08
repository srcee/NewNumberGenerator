genApp.controller('detailsCtrl', ['$scope', '$routeParams', 'genActionsService', function ($scope, $routeParams, genActionsService) {

    $scope.currentGenerator = genActionsService.getGeneratorsById($routeParams.id);
    $scope.list = $scope.currentGenerator.listOfNumbers;
    $scope.action = 'normal';
    $scope.randomPos = function () {
        return {
            position: 'absolute',
            top: Math.floor((Math.random() * (window.innerHeight - 100)) + 150) + 'px',
            left: Math.floor((Math.random() * (window.innerWidth - 100)) + 100) + 'px'
        }
    }

    $scope.normalHandler = function () {
        $scope.action = 'normal';
    };

    $scope.sortedHandler = function () {
        $scope.sortedList = $scope.currentGenerator.listOfNumbers.slice();
        $scope.sortedList.sort((a, b) => a - b);
        $scope.action = 'filtered';
    };

    $scope.randomHandler = function () {
        $scope.action = 'random';

    };
}])