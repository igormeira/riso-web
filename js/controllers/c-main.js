'use strict';

var app;
app = angular.module('controllerMain', []);

    app.controller('MainCtrl', function($scope) {

        $scope.show = true;
        $scope.search = "";
        
        $scope.desambiguate = function () {
            console.log($scope.search);
        }

    });