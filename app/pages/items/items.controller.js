(function () {
  'use strict';

  angular.module('dashboardApp').controller('ItemsController', ['api', function (api) {
    var vm = this;
    vm.columns = [
      { field: 'id', label: 'ID' },
      { field: 'name', label: 'Name' },
      { field: 'status', label: 'Status' }
    ];
    vm.rows = [];
    vm.deleteDisabled = true;

    vm.load = function () {
      api.listItems().then(function (data) { vm.rows = data.items || []; });
    };
    vm.edit = function (row) {
      var updated = angular.copy(row);
      updated.name = row.name + ' (edited)';
      api.updateItem(row.id, updated).then(vm.load);
    };
    vm.delete = function () {};

    vm.load();
  }]);
})();


