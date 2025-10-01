// Presentational metric card component. Displays a title, value, optional highlight, and icon.
(function () {
	'use strict';

	angular.module('dashboardApp').component('statCard', {
		bindings: {
			label: '@',
			value: '<',
			highlight: '<?',
			icon: '@'
		},
		templateUrl: '/app/components/stat-card/stat-card.component.html'
	});
})();



