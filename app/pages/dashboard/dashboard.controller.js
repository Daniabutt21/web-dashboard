// DashboardController: handles date filter, loads daily metrics, maps icons, and shows toast
(function () {
	'use strict';

	angular.module('dashboardApp').controller('DashboardController', ['$location', 'api', 'initialMetrics', '$timeout', function ($location, api, initialMetrics, $timeout) {
		var vm = this;
		vm.metrics = (initialMetrics && initialMetrics.metrics) || [];
		vm.loading = false;
		var hasLoadedOnce = false;
		
		function setTodaysDate() {
			var today = new Date();
			var year = today.getFullYear();
			var month = String(today.getMonth() + 1).padStart(2, '0');
			var day = String(today.getDate()).padStart(2, '0');
			vm.date = year + '-' + month + '-' + day;
			console.log('Date set to:', vm.date); // Debug log
		}
		
		setTodaysDate();
		
		$timeout(function() {
			setTodaysDate();
		}, 100);

		function toYyyyMmDd(value) {
			if (!value) return '';
			if (typeof value === 'string') {
				if (/^\d{4}-\d{2}-\d{2}/.test(value)) return value.slice(0, 10);
			}
			var d = value instanceof Date ? value : new Date(value);
			if (isNaN(d.getTime())) return '';
			return new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate())).toISOString().slice(0, 10);
		}

		vm.load = function () {
			var dateStr = toYyyyMmDd(vm.date);
			var query = dateStr ? ('?date=' + dateStr) : '';
			// loading overlay removed per request
			api.getDailyMetrics(query).then(function (data) {
				var iconKeyByLabel = {
					'DOCUMENTS RECEIVED': 'documents',
					'RECEIVED TITLE': 'title',
					'SEND DOCS TO TTG': 'upload',
					'ON HOLD-QA': 'clock',
					'TTG SENT TO COUNTY': 'refresh',
					'SUCCESSFULLY SENT TO DMV': 'bank',
					'WS CORRECTION REQUESTED': 'request',
					'WS CORRECTION COMPLETE': 'done',
					'POST AUDIT': 'audit'
				};
				var metrics = (data.metrics || []);
				vm.metrics = metrics.map(function (m) {
					return { label: m.label, value: m.value, highlight: m.highlight, icon: iconKeyByLabel[m.label] || 'documents' };
				});
				var sum = metrics.reduce(function (acc, m) { return acc + Number(m.value || 0); }, 0);
				if (!sum && hasLoadedOnce) {
					try {
						var toastEl = document.getElementById('appToast');
						var bodyEl = document.getElementById('appToastBody');
						if (bodyEl) bodyEl.textContent = 'Data not found';
						if (toastEl && window.bootstrap && window.bootstrap.Toast) {
							var t = new window.bootstrap.Toast(toastEl);
							t.show();
						}
					} catch (e) { }
				}
				hasLoadedOnce = true;
			});
		};

		vm.onDateChange = function () {
			// Keep normalized model but don't auto-fetch; fetch happens on Filter click
			var dateStr = toYyyyMmDd(vm.date);
			if (!dateStr) {
				setTodaysDate();
			} else {
				vm.date = dateStr;
			}
		};

		vm.load();
	}]);
})();
