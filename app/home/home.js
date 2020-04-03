'use strict';

angular.module('numberGenerator.home', ['generatorModule'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'home/home.html',
            controller: 'HomeCtrl'
        });
    }])
    .controller('HomeCtrl', ['$scope', 'actions', function ($scope, actions) {

        $scope.btnHandler = function () {
            console.log(actions.getGenerators());
        };
        $scope.details = function () {
            let arr = actions.getGenerators()
            console.log(arr[0].listOfNumbers);
        }
    }]);