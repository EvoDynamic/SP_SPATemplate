(function () {
    'use strict';

    var app = angular.module('app');

	// all events that could monitored in app

    var events = {
    	controllerActivateSuccess: 'controller.activateSuccess'
    };

	// create the app config object
	// this contains static stuff, like global constants, not global variables
    var config = {
    	// config the exceptionHandler decoration
    	appErrorPrefix: '[SYSERR] ',
    	// app events
    	events: events,
    	// app version
    	version: '1.0.0.0',
    	//debug notification settings
    	showDebugNotiSetting: true
    };

	// create global variable in the app called 'config'
    app.value('config', config);

	//configure AngularJS' logging service before startup
	app.config(['$logProvider', function ($logProvider) {
		//turn debugging off/on (no info/warnings)
		if ($logProvider.debugEnabled) {
			$logProvider.debugEnabled(true);
		}
	}]);

	//create a common config reference
	app.config(['commonConfigProvider', function (cfg) {
		cfg.config.controllerActivateSuccessEvent = config.events.controllerActivateSuccess;
	}]);

})();