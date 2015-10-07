'use strict';

angular.module('webApplicationApp').config(function ($routeProvider) {
    $routeProvider
      .when('/', {  
        templateUrl: 'components/home/home.html',
        controller: 'HomeController'
      })
      .when('/photos/:id', {
        templateUrl: 'components/photo/photo.html',
        controller: 'PhotoController'
      })
      .when('/about', {
        templateUrl: 'components/about/about.html',
        controller: 'AboutCtrl'
      })
      .when('/aerospace-manufacturer/list', {
        templateUrl: 'components/aerospace-manufacturer/list.html',
        controller: 'AerospaceManufacturerController'
      })
      .when('/aerospace-manufacturer/show/:id', {
        templateUrl: 'components/aerospace-manufacturer/show.html',
        controller: 'AerospaceManufacturerController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
