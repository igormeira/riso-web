'use strict';

var app;
app = angular.module('risoApp');

app.controller('EnrichCtrl', function($http, $window) {

    var enrich = this;

    enrich.ctx = [];
    enrich.rel = {};

    var ctx = loadRel('contexts');
    enrich.ctx = ctx;

    for (var i = 0; i < enrich.ctx.length; i++) {
      $http.get('http://0.0.0.0:5003/api/'+enrich.ctx[0]+'/rel')
          .success(function(relation) {
              var rel = relation;
              if (enrich.rel[rel] != undefined) {
                  //Adicionar em uma Key existente
              } else {
                  //Criar Key e adicionar valor
              };
          })
          .error(function(error) {
              console.log(error);
          });
    };

    /////////////////////////
    // Auxiliary functions //
    /////////////////////////
    function loadRel(key) {
        return JSON.parse(window.localStorage.getItem(key)) || [];
    }
});
