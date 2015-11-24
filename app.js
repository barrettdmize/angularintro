(function () {
  "use strict";

  angular
    .module('fruits', [
      'ngRoute'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          template: '<h1>Welcome to the premier resource on experiencing fruit</h1><a href="#/fruits">go to fruits</a><button ng-click="alertMe()">alert me</button>{{msg}}',
          controller: 'MainController'
        })
        .when('/fruits', {
          templateUrl: 'views/fruitreviews/list.html',
          controller: 'FruitsController'

        })
        .when('/fruits/:fruitId', {
          templateUrl: 'views/fruitreviews/show.html',
          controller: 'FruitsController'
        })
        .when('/fruits/:fruitId/edit', {
          templateUrl: 'views/fruitreviews/edit.html',
          controller: 'FruitsController'
        })
        .when('/addFruit', {
          templateUrl: 'views/fruitreviews/create.html',
          controller: 'FruitsController'
        })
        .when('/404', {
          templateUrl: 'views/404.html'
        })
        .otherwise({ redirectTo: '/404'});

    });




})();
