(function (undefined) {
	'use strict';

	// define controller
	var controllerId = 'learningPaths';
	angular.module('app').controller(controllerId,
		['common', learningPaths]);

	// create controller
	function learningPaths(common) {
		var vm = this;

		// init controller
		init();

		function init() {
			common.logger.log('controller loaded', null, controllerId);
			common.activateController([], controllerId);
		}
	}
})();