(function () {
  'use strict';
  angular.module('dashboardApp').config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/app/pages/dashboard/dashboard.html',
        controller: 'DashboardController',
        controllerAs: '$ctrl'
      })
      .otherwise('/');
  }]);
})();


