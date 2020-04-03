app.directive('ngPosition', function () {
    return {
        scope: true,
        template: "<div class='num' ng-style='pos'></div>",
        replace: true,
        controller: function ($scope) {

            $scope.pos = {
                top: undefined,
                left: undefined
            };

            $scope.newPos = function () {
                // calculate however you'd like:
                $scope.pos.top = Math.random() * 400 + "px";
                $scope.pos.left = Math.random() * 500 + "px";
            }
        }
    };
});