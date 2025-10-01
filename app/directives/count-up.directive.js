// Directive: count-up - animates numeric changes using CountUp.js
(function () {
	'use strict';
	angular.module('dashboardApp').directive('countUp', [function () {
		return {
			restrict: 'A',
			scope: {
				countUp: '<'
			},
      link: function (scope, el) {
				var CountUp = window.CountUp || (window.countUp && window.countUp.CountUp);
				var instance = null;
        function toNumber(val) {
          var n = Number(val);
          return isFinite(n) ? n : 0;
        }
        function animate(to) {
          var num = toNumber(to);
          if (!CountUp) { el.text(num); return; }
          if (!instance) {
            instance = new CountUp(el[0], num, { duration: 0.6, separator: ',', useEasing: true });
            if (!instance.error) { instance.start(); } else { el.text(num); }
            return;
          }
          if (!instance.error) { instance.update(num); } else { el.text(num); }
				}
        // Initialize with 0 to avoid NaN flash
        el.text('0');
        scope.$watch('countUp', function (val) { animate(val); });
				scope.$on('$destroy', function () { instance = null; });
			}
		};
	}]);
})();


