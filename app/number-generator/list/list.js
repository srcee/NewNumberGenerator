'use strict';

angular.module('numberGenerator.listOfGenerators', ['generatorModule'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/list', {
            templateUrl: 'number-generator/list/list.html',
            controller: 'listCtrl'
        });
    }])
    .controller('listCtrl', ['$scope', 'actions', function ($scope, actions) {
        $scope.generators = actions.getGenerators();
    }]);