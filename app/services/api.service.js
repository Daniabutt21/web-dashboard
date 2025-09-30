(function () {
  'use strict';

  angular.module('dashboardApp').factory('api', ['$http', function ($http) {
    var base = (window.ENV && window.ENV.apiBaseUrl ? window.ENV.apiBaseUrl : '') + '/api';
    return {
      getDailyMetrics: function (query) { return $http.get(base + '/metrics/daily' + (query || '')).then(function (r) { return r.data; }); },
      listItems: function () { return $http.get(base + '/items').then(function (r) { return r.data; }); },
      createItem: function (item) { return $http.post(base + '/items', item).then(function (r) { return r.data; }); },
      updateItem: function (id, item) { return $http.put(base + '/items/' + id, item).then(function (r) { return r.data; }); },
      deleteItem: function (id) { return $http.delete(base + '/items/' + id).then(function (r) { return r.data; }); }
    };
  }]);
})();


