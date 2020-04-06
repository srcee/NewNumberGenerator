genApp.directive('position', function () {
    return {
        restrict: 'A',
        template: "<div class='nums-view' ng-style='pos'>{{num}}</div>",
        link: function (scope) {

            scope.pos = {
                backgroundColor: scope.$parent.generator.color,
                top: Math.random() * window.innerHeight + "px",
                left: Math.random() * window.innerWidth + "px"
            };
        }
    };
});