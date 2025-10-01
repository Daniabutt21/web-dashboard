// App module bootstrapping, global constants, HTTP interceptor, and common filters
(function () {
	'use strict';
	angular.module('dashboardApp', ['ngRoute']);
	angular.module('dashboardApp').constant('APP_CONFIG', {
		apiPrefix: '/api'
	});
	angular.module('dashboardApp').config(['$httpProvider', function ($httpProvider) {
		$httpProvider.interceptors.push(['$q', function ($q) {
			return {
				request: function (config) {
					config.headers = config.headers || {};
					config.headers['X-Requested-With'] = 'XMLHttpRequest';
					return config;
				},
				responseError: function (rejection) {
					console.error('API error:', rejection.status, rejection.config && rejection.config.url);
					return $q.reject(rejection);
				}
			};
		}]);
	}]);
	angular.module('dashboardApp').filter('shortNumber', function () {
		return function (n) {
			if (n === null || n === undefined) return n;
			var num = Number(n);
			if (num >= 1e9) return (num / 1e9).toFixed(1).replace(/\.0$/, '') + 'B';
			if (num >= 1e6) return (num / 1e6).toFixed(1).replace(/\.0$/, '') + 'M';
			if (num >= 1e3) return (num / 1e3).toFixed(1).replace(/\.0$/, '') + 'K';
			return String(num);
		};
	});
	angular.module('dashboardApp').filter('isoDate', function () {
		return function (d) { return (d ? String(d).slice(0, 10) : ''); };
	});
	angular.module('dashboardApp').run(['$rootScope', '$location', function ($rootScope, $location) {
		$rootScope.$on('$routeChangeSuccess', function () {
			var path = $location.path();
			$rootScope.routeClass = (path === '/404') ? 'not-found-page' : '';
		});
	}]);
})();


