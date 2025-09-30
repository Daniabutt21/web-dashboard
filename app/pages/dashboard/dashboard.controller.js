(function () {
  'use strict';

  angular.module('dashboardApp').controller('DashboardController', ['$location', 'api', function ($location, api) {
    var vm = this;
    vm.metrics = [];
    vm.date = new Date().toISOString().slice(0,10);

    vm.load = function () {
      var query = vm.date ? ('?date=' + vm.date) : '';
      api.getDailyMetrics(query).then(function (data) {
        vm.metrics = data.metrics || [];
      });
    };

    vm.load();
  }]);
})();


