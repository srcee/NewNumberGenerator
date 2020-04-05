genApp.controller('numsViewCtrl', ['$scope', 'actions', function ($scope, actions) {

    $scope.generators = actions.getGenerators();

    // TODO: Refactor it cause it fulls the console with errors!!!
    $scope.randomPosition = function () {

        let top = Math.floor(Math.random() * (800 - 100) + 100) + "px"
        let left = Math.floor(Math.random() * (800 - 100) + 100) + "px"

        console.log(top, left);

        return {
            'width': '3em',
            'height': '3em',
            'position': 'absolute',
            'top': top,
            'left': left
        }
    }
}])