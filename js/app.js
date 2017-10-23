'use strict';

/**
 * @ngdoc overview
 * @name risoApp
 * @description
 * # risoApp
 *
 * Main module of the application.
 */
var app;
app = angular.module('risoApp', ['ngRoute', 'directivesNavFoot']);

    app.config(function($routeProvider) {

        $routeProvider.when('/',  {
            temaplateUrl: "views/main.html",
            controller: 'MainCtrl'
        });

        $routeProvider.when('/enrich',  {
            temaplateUrl: "views/enrich.html",
            controller: 'MainCtrl'
        });

        $routeProvider.when('/about',  {
            temaplateUrl: "views/about.html"
        });

        $routeProvider.when('/help',  {
            temaplateUrl: "views/help.html"
        });

        $routeProvider.otherwise({
            redirectTo: '/'
        });

    });
