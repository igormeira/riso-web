(function() {
  'use strict';

  angular.module('risoApp')
    .directive('risoNavbar', risoNavbar);


    /*jshint latedef: nofunc */
    function risoNavbar() {
      return {
        templateUrl: 'views/riso-navbar.html',
        restrict: 'E',
        scope: {
          expanded: '='
        }
      };
    }
})();
