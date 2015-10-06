'use strict';

angular
  .module('webApplicationApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', { 
        controller: 'HomeController', 
        templateUrl: 'views/home.html' 
      })
      .when('/photos/:id', {
        controller: 'PhotoController',
        templateUrl: 'views/photo.html'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/put-json', {
        templateUrl: 'views/put-json.html',
        controller: 'putJsonCtrl',
        controllerAs: 'putJson'
      })
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
