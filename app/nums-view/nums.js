'use strict';

angular.module('numberGenerator.numbersView', [])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/num-view', {
            templateUrl: 'nums-view/nums.html',
            controller: 'numsCtrl'
        });
    }])
    .controller('numsCtrl', [
        function () {
            console.log('nums view');
        }]);