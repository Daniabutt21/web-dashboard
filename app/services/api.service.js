// AngularJS service: wraps HTTP calls to backend API endpoints used by the dashboard
(function () {
  'use strict';

  angular.module('dashboardApp').factory('api', ['$http', function ($http) {
    var base = ((window.ENV && window.ENV.apiBaseUrl) ? window.ENV.apiBaseUrl : '') + '/api';
    return {
      getDailyMetrics: function (query) { return $http.get(base + '/metrics/daily' + (query || '')).then(function (r) { return r.data; }); }
    };
  }]);
})();


