(function (undefined) {
	'use strict';

	// define controller
	var controllerId = 'learningItems';
	angular.module('app').controller(controllerId,
		['common', learningItems]);

	// create controller
	function learningItems(common) {
		var vm = this;

		// init controller
		init();

		function init() {
			common.logger.log('controller loaded', null, controllerId);
			common.activateController([], controllerId);
		}
	}
})();