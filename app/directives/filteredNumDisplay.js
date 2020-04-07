genApp.directive('filteredNumDisplay', function () {
    return {
        restrict: 'A',
        template: '<div class="nums-view" ng-style="pos">{{num}}<span ng-style="col">{{name}}</span></div>',
        link: function (scope) {
            // TODO
        }
    };
});