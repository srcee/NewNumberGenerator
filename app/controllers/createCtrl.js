genApp.controller('createCtrl', ['$scope', '$location', 'genActionsService', function ($scope, $location, genActionsService) {
    $scope.createHandler = function (data) {
        genActionsService.createNewGenerator(data.generatorsName, data.numsCount);
        $location.path('/list');
    }
}]);