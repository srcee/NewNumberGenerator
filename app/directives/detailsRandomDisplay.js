genApp.directive('detailsRandomDisplay', function () {
    return {
        restrict: 'A',
        template: '<div class="nums-view" ng-style="col">{{num}}</div>',
        link: function (scope) {

            scope.col = {
                backgroundColor: scope.currentGenerator.color,
                top: Math.floor((Math.random() * (window.innerHeight - 100)) + 200) + 'px',
                left: Math.floor((Math.random() * (window.innerWidth - 100)) + 200) + 'px',
                fontSize: '35px',
                color: 'white'
            }
        }
    };
});