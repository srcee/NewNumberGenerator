genApp.directive('position', function () {
    return {
        restrict: 'A',
        template: "<div class='nums-view' ng-style='pos'>{{num}}</div>",
        link: function (scope) {

            console.log('directive is working');
            scope.pos = {
                top: Math.random() * window.innerHeight + "px",
                left: Math.random() * window.innerWidth + "px"
            };
        }
    };
});