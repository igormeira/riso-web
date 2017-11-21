'use strict';

var app;
app = angular.module('risoApp');

    app.controller('MainCtrl', function($http, $window) {

        var main = this;

        //Show vars
        main.showDesBt = true;
        main.showCtx = false;

        //Disambiguation vars
        main.context = [];
        main.select = [];
        main.rel = [];

        main.disambiguate = function () {

            $http({
                method: 'GET',
                url: 'http://0.0.0.0:5003/api/'+main.search+'/contextos'
            }).then(function (success){
                main.context = success.data;
            },function (error){
                console.log(error);
            });

            main.showCtx = true;
            main.showDesBt = false;
        };

        main.cancel = function () {
            main.showDesBt = true;
            main.showCtx = false;
            main.context = [];
            main.select = [];
        };

        main.selected = function (ctx) {
            if (contains(main.select, ctx)) {
                var index = main.select.indexOf(ctx);
                main.select.splice(index, 1);

            }
            else {
                main.select.push(ctx);
            }
        };

        main.enrich = function () {
            saveRel('contexts', main.select);
        };


        /////////////////////////
        // Auxiliary functions //
        /////////////////////////
        function contains(array, obj) {
            var i = array.length;
            while (i--) {
                if (array[i] === obj) {
                    return true;
                }
            }
            return false;
        }

        function saveRel(key, obj) {
            return window.localStorage.setItem(key, JSON.stringify(obj)) || [];
        }

    });
