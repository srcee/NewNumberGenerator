genApp.controller('numsViewCtrl', ['$scope', 'genActionsService', function ($scope, genActionsService) {
    $scope.generators = genActionsService.getGenerators();
}])