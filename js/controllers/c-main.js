'use strict';

var app;
app = angular.module('controllerMain', []);

    app.controller('MainCtrl', function() {

        var main = this;
        main.show = true;

        main.desambiguate = function () {
            console.log(main.search);
        };

    });
