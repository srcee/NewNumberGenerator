genApp.directive('detailsDisplay', function () {
    return {
        restrict: 'A',
        template: '<div ng-style="col" class="normal-details-container">{{num}}</div>',
        link: function (scope) {
            scope.color = scope.currentGenerator.color;

            scope.col = {
                backgroundColor: scope.color,
                fontSize: '35px',
                textAlign: 'center',
                paddingTop: '3px',
                width: '50px',
                height: '50px',
                color: 'white',
                borderRadius: '50%'
            }
        }
    };
});