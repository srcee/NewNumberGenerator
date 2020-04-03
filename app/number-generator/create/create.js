'use strict';

angular.module('numberGenerator.createGenerator', ['generatorModule'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/create', {
            templateUrl: 'number-generator/create/create.html',
            controller: 'createCtrl'
        });
    }])
    .controller('createCtrl', ['$scope', 'actions', function ($scope, actions) {
        $scope.createHandler = function (data) {
            actions.create(data.generatorsName, data.color, data.numsCount);
        }
    }]);