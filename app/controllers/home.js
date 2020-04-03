genApp.controller('homeCtrl', ['$scope', 'actions', function ($scope, actions) {

    $scope.btnHandler = function () {
        console.log(actions.getGenerators());
    };
    $scope.details = function () {
        let arr = actions.getGenerators()
        console.log(arr[0].listOfNumbers);
    }
}]);