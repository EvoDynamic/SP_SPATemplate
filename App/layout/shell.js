(function (undefined) {
	'use strict';

	// define controller
	var controllerId = 'shell';
	angular.module('app').controller(controllerId,
		['$rootScope', 'common', shell]);

	// create controller
	function shell($rootScope, common) {
		var vm = this;

		// init controller
		init();

		function init() {
			common.logger.log('controller loaded', null, controllerId);
			common.activateController([], controllerId);
		}
	}
})();