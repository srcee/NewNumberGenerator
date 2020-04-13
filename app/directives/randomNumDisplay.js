genApp.directive('randomNumDisplay', function () {
    return {
        restrict: 'A',
        template: '<div class="nums-view" ng-style="pos">{{num.value}}<span class="num-name">{{name}}</span></div>',
        link: function (scope) {
            scope.name = scope.$parent.generator.name;
            scope.color = scope.$parent.generator.color; // TODO

            scope.col = {
                color: scope.color
            };
            scope.pos = {
                backgroundColor: scope.color,
                top: Math.floor((Math.random() * ((window.innerHeight - 100) - 100)) + 100) + 'px',
                left: Math.floor((Math.random() * ((window.innerWidth - 100) - 200)) + 200) + 'px',
            };
        }
    };
});