'use strict';

var genApp = angular.module('numberGenerator', ['ngRoute', 'generatorModule']);

genApp.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('');

  $routeProvider
    .when('/', {
      templateUrl: 'views/homeView.html',
      controller: 'homeCtrl'
    })
    .when('/create', {
      templateUrl: 'views/createView.html',
      controller: 'createCtrl'
    })
    .when('/list', {
      templateUrl: 'views/listView.html',
      controller: 'listCtrl'
    })
    .when('/num-view', {
      templateUrl: 'views/numsView.html',
      controller: 'numsViewCtrl'
    })
    .when('/details/:id', {
      templateUrl: 'views/detailsView.html',
      controller: 'detailsCtrl'
    })
    .otherwise({ redirectTo: '/' });
}]);
