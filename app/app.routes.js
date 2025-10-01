// Route configuration: dashboard, 404, and initial data resolve
// Route configuration: sets up pages and data resolves. Uses hash routing.
(function () {
	'use strict';
	angular.module('dashboardApp').config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
		// Remove the default hash-bang (#!) so URLs use just #/
		if ($locationProvider && $locationProvider.hashPrefix) {
			$locationProvider.hashPrefix('');
		}
		$routeProvider
			.when('/', {
				templateUrl: '/app/pages/dashboard/dashboard.html',
				controller: 'DashboardController',
				controllerAs: '$ctrl',
				resolve: {
					initialMetrics: ['api', function (api) { return api.getDailyMetrics(''); }]
				}
			})
			.when('/404', {
				templateUrl: '/app/pages/not-found/not-found.html'
			})
			.otherwise('/404');
	}]);
})();


