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
  var app = angular.module('risoApp',[
      'ui.router',
      'templates'
    ]);

  app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {
      $stateProvider
      .state('desambiguation', {
        url: "/",
        templateUrl: "views/desambiguation.html",
        controller: "MainCtrl",
        controllerAs: "ctrl",
        reloadOnSearch: false
      })
      .state('enrich', {
        url: "/enrich",
        templateUrl: "views/enrich.html",
        controller: "MainCtrl",
        controllerAs: "main"
      })
      .state('help', {
        url: "/help",
        templateUrl: "views/help.html"
      })
      .state('about', {
        url: "/about",
        templateUrl: "views/about.html"
      });
      $urlRouterProvider.otherwise('/');
    }])

})();
