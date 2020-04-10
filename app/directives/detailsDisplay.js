genApp.directive('detailsDisplay', function () {
    return {
        restrict: 'A',
        template: '<div class="nums-view" ng-style="col">{{num.value}}</div>',
        link: function (scope) {
            scope.col = {
                backgroundColor: scope.currentGenerator.color,
                fontSize: '35px',
                color: 'white'
            }
        }
    };
});