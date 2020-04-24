'use strict';

var genApp = angular.module('numberGenerator', ['ngRoute', 'generatorFactory']);

genApp.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('');

  $routeProvider
    .when('/', {
      templateUrl: 'templates/views/createView.html',
      controller: 'createCtrl'
    })
    .when('/create', {
      templateUrl: 'templates/views/createView.html',
      controller: 'createCtrl'
    })
    .when('/list', {
      templateUrl: 'templates/views/listView.html',
      controller: 'listCtrl'
    })
    .when('/num-view', {
      templateUrl: 'templates/views/numsView.html',
      controller: 'numsViewCtrl'
    })
    .when('/details/:id/:displayType', {
      templateUrl: 'templates/views/detailsView.html',
      controller: 'detailsCtrl'
    })
    .otherwise({ redirectTo: '/' });
}]);



