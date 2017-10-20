(function() {
  'use strict';

  /**
   * @ngdoc overview
   * @name risoApp
   * @description
   * # risoApp
   *
   * Main module of the application.
   */
angular.module('risoApp', ['ngRoute', 'directivesNavFoot'])

  .config(function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider.when('/',  {
      temaplateUrl: 'views/main.html',
      controller: 'MainCtrl'
    });

    $routeProvider.when('/enrich',  {
      temaplateUrl: 'views/enrich.html',
      controller: 'MainCtrl'
    });

    $routeProvider.when('/about',  {
      temaplateUrl: 'views/about.html'
    });

    $routeProvider.when('/help',  {
      temaplateUrl: 'views/help.html'
    });

    $routeProvider.otherwise({
      redirectTo: '/'
    });

  })});
