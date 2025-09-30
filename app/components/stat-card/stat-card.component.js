(function () {
  'use strict';

  angular.module('dashboardApp').component('statCard', {
    bindings: {
      label: '@',
      value: '<',
      highlight: '<?'
    },
    templateUrl: '/web-dashboard/app/components/stat-card/stat-card.component.html'
  });
})();


