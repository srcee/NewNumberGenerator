genApp.directive('detailsRandomDisplay', [function () {
    return {
        restrict: 'A',
        templateUrl: '../templates/directives/detailsRandomDisplayView.html',
        link: function (scope) {
            scope.bgCol = {
                backgroundColor: scope.color,
                top: Math.floor((Math.random() * ((window.innerHeight - 100) - 300)) + 300) + 'px',
                left: Math.floor((Math.random() * ((window.innerWidth - 100) - 200)) + 200) + 'px',
            };

            scope.col = {
                color: scope.color
            };
        }
    };
}]);