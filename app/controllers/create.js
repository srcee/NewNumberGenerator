genApp.controller('createCtrl', ['$scope', 'actions', function ($scope, actions) {
    $scope.createHandler = function (data) {
        actions.create(data.generatorsName, data.numsCount);
    }
}]);