'use strict';

var app;
app = angular.module('risoApp');

app.controller('EnrichCtrl', function($http, $window) {

    var enrich = this;

    enrich.rel = [];

    var rel = loadRel('relations');
    enrich.rel = rel;

    console.log(enrich.rel);


    function loadRel(key) {
        return JSON.parse(window.localStorage.getItem(key)) || [];
    }
});
