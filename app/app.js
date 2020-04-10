'use strict';

var genApp = angular.module('numberGenerator', ['ngRoute', 'generatorFactory']);

genApp.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('');

  $routeProvider
    .when('/', {
      templateUrl: 'views/createView.html',
      controller: 'createCtrl'
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
    .when('/test', {
      templateUrl: 'views/test.html',
      controller: 'testCtrl'
    })
    .otherwise({ redirectTo: '/' });
}]);


genApp.constant('detailsViewsConstant',
  {
    normal: 'normal',
    sorted: 'sorted',
    random: 'random',
    filtered: 'filtered'
  }
);

