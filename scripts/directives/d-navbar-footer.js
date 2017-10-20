(function() {
  'use strict';

angular.module('directivesNavFoot', [])

  .directive('navbar', function() {
    var ddo = {};
    ddo.restrict: 'AE';
    ddo.templateUrl: 'views/navbar.html';
    return ddo;
  });

  .directive('footer', function() {
    var ddo = {};
    ddo.restrict: 'AE';
    ddo.templateUrl: 'views/footer.html';
    return ddo;
  });

})();
