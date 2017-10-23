'use strict';

var app;
app = angular.module('directivesNavFoot', []);

  app.directive('navbar', function() {
    var ddo = {};
    ddo.restrict = 'AE';
    ddo.templateUrl = 'views/navbar.html';
    return ddo;
  });

  app.directive('footer', function() {
    var ddo = {};
    ddo.restrict = 'AE';
    ddo.templateUrl = 'views/footer.html';
    return ddo;
  });
