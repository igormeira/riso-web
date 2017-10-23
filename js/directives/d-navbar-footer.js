'use strict';

var app;
app = angular.module('directivesNavFoot', []);

  app.directive('ngNavbar', function() {
    var ddo = {};
    ddo.restrict = 'AE';
    ddo.templateUrl = 'views/navbar.html';
    return ddo;
  });

  app.directive('ngFooter', function() {
    var ddo = {};
    ddo.restrict = 'AE';
    ddo.templateUrl = 'views/footer.html';
    return ddo;
  });
