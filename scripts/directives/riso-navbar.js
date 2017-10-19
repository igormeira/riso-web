(function() {
  'use strict';

  var app = angular.module('risoApp', []);

  app.directive('risoNavbar', risoNavbar);
    function risoNavbar() {
      return {
        templateUrl: 'views/riso-navbar.html',
        restrict: 'E'
      };
    }
})();
