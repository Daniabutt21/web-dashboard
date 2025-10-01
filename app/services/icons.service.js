(function () {
	'use strict';
	angular.module('dashboardApp').factory('icons', [function () {
		function svg(name) {
			var map = {
				documents: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6 2h8l4 4v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm7 1.5V7h3.5L13 3.5zM8 9h8v1.5H8V9zm0 3h8v1.5H8V12zm0 3h5v1.5H8V15z"/></svg>',
				title: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M5 4h14a1 1 0 0 1 1 1v14l-3-2-3 2-3-2-3 2-3-2V5a1 1 0 0 1 1-1zm3 4h8v2H8V8z"/></svg>',
				upload: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 3l4 4h-3v6h-2V7H8l4-4zm7 12v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-4h2v4h10v-4h2z"/></svg>',
				clock: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm.75-10.44l3.4 1.96-.75 1.3-4.15-2.4V7h1.5v4.56z"/></svg>',
				refresh: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 4a8 8 0 1 0 8 8h-2a6 6 0 1 1-1.76-4.24L14 10h6V4l-2.35 2.35A7.96 7.96 0 0 0 12 4z"/></svg>',
				bank: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M3 11l9-7 9 7v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8zm8 5.59l5.3-5.3-1.41-1.41L11 13.76l-2.89-2.88-1.41 1.41L11 17.59z"/></svg>',
				request: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 3h12l4 4v14H4V3zm11 1.5V8h3.5L15 4.5zM7 11h8v1.5H7V11zm0 3h6v1.5H7V14z"/></svg>',
				done: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 3h12l4 4v14H4V3zm11 1.5V8h3.5L15 4.5zM8 14.5l-2-2 1.06-1.06L8 12.38l3.94-3.94L13 9.5 8 14.5z"/></svg>',
				audit: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7 3h10a2 2 0 0 1 2 2v14l-5-3-5 3V5a2 2 0 0 1 2-2zm1 4h8v2H8V7zm0 4h8v2H8v-2z"/></svg>'
			};
			return map[name] || '';
		}
		return { svg: svg };
	}]);
})();


