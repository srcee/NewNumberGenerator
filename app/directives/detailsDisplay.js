genApp.directive('detailsDisplay', function () {
    return {
        restrict: 'A',
        template: '<div class="nums-view" ng-style="col"><span class="num-name">{{name}}</span>{{num.value}}</div>',
        link: function (scope) {
            scope.col = {
                backgroundColor: scope.color,
                fontSize: '35px',
                color: 'white'
            }
        }
    };
});