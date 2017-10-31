'use strict';

var app;
app = angular.module('risoApp');

    app.controller('MainCtrl', function() {

        var main = this;

        //Show vars
        main.showDesBt = true;
        main.showCtx = false;

        main.desambiguate = function () {
            console.log(main.search);
        };

    });
