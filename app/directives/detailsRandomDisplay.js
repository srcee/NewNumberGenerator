genApp.directive('detailsRandomDisplay', function () {
    return {
        restrict: 'A',
        template: '<div class="nums-view" ng-style="col"><span class="num-name">{{name}}</span>{{num.value}}</div>',
        link: function (scope) {
            scope.col = {
                backgroundColor: scope.color,
                top: Math.floor((Math.random() * ((window.innerHeight - 100) - 300)) + 300) + 'px',
                left: Math.floor((Math.random() * ((window.innerWidth - 100) - 200)) + 200) + 'px',
                fontSize: '35px',
                color: 'white'
            }
        }
    };
});