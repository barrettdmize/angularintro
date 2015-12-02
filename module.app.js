(function () {
  "use strict";

  angular
    .module('dinosaurs', [
      'ngRoute'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          template: '<h1>Welcome to the premier resource on dinosaur goods</h1><a href="#/dinosaurs">go to dinosaur</a><button ng-click="alertMe()">alert me</button>{{msg}}',
          controller: 'MainController'
        })
        .when('/dinosaurs', {
          templateUrl: 'views/dinosaurus/list.html',
          controller: 'DinosaursController'
        })
        .when('/dinosaurs', {
          templateUrl: 'views/dinosaurus/list.html',
          controller: 'DinosaursController'
        })
        .when('/dinosaurs/:dinosaurId', {
          templateUrl: 'views/dinosaurus/show.html',
          controller: 'DinosaursController'
        })
        .when('/dinosaurs/:dinosaurId/edit', {
          templateUrl: 'views/dinosaurus/edit.html',
          controller: 'DinosaursController'
        })
        .when('/addDinosaur', {
          templateUrl: 'views/dinosaurus/create.html',
          controller: 'DinosaursController'
          .when('/likes', {
          templateUrl: 'views/likes/list.html',
          controller: 'DinosuarsController'
        })
        .when('/likes/:likeDinosaurId', {
          templateUrl: 'views/likes/detail.html',
          controller: 'DinosaursController'

        })
        .when('/404', {
          templateUrl: 'views/404.html'
        })
        .otherwise({ redirectTo: '/404'});

    });




})();
