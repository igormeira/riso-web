'use strict';

var app;
app = angular.module('risoApp');

app.controller('EnrichCtrl', function($http, $window) {

    var enrich = this;

    enrich.ctx = [];
    enrich.rel = {};

    enrich.ctx = loadRel('contexts');

    for (var i = 0; i < enrich.ctx.length; i++) {
        var id = enrich.ctx[i].conceitoId;

        //Get all relations
        $http({
            method: 'GET',
            url: 'http://0.0.0.0:5003/api/'+id+'/rel'
        }).then(function (success){

            for (var j = 0; j < success.data.length; j++) {
                var relation = success.data[j].relacao;
                var secondaryId = success.data[j].idSecundario;

                addRelation(relation, secondaryId);
            }

        },function (error){
            console.log(error);
        });
    }

    /////////////////////////
    // Auxiliary functions //
    /////////////////////////
    function loadRel(key) {
        return JSON.parse(window.localStorage.getItem(key)) || [];
    }

    function addRelation(relation, secondaryId) {
        $http({
            method: 'GET',
            url: 'http://0.0.0.0:5003/api/'+secondaryId+'/info'
        }).then(function (success){
            var term = success.data[0].termo;

            if (enrich.rel[relation] === undefined) {
                //Create Key and add value
                enrich.rel[relation] = [term];
            } else {
                //Add value into a Key
                enrich.rel[relation].push(term);
            }

        },function (error){
            console.log(error);
        });
    }

});
