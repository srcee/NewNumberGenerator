genApp.directive('position', function () {
    return {
        scope: true,
        template: "<div ng-style='pos'></div>",
        replace: true,
        controller: function ($scope) {

            console.log('directive is working');
            $scope.pos = {
                width: 3 + "em",
                height: 3 + "em",
                position: absolute,
                top: Math.random() * 400 + "px",
                left: Math.random() * 500 + "px"
            };
        }
    };
});