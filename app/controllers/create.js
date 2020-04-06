genApp.controller('createCtrl', ['$scope', '$location', 'genFactory', function ($scope, $location, genFactory) {
    $scope.createHandler = function (data) {
        genFactory.create(data.generatorsName, data.numsCount);
        $location.path('/list');
    }
}]);