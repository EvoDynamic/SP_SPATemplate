(function (undefined) {
	'use strict';

	var app = angular.module('app');

	//create an exception handler for all errors that AngularJS emits to be handled by our app
	app.config(function ($provide) {
		$provide.decorator('$exceptionHandler',
			['$delegate', 'config', 'logger', extendExceptionHandler]);
	});

	//extend the AngularJS exceptin handler
	function extendExceptionHandler($delegate, config, logger) {
		var appErrorPrefix = config.appErrorPrefix;

		return function (exception, cause) {
			$delegate(exception, cause);
			if (appErrorPrefix && exception.message.indexOf(appErrorPrefix) === 0) {
				return;
			}

			var errorData = {
				exception: exception,
				cause: cause
			};

			var message = appErrorPrefix + exception.message;

			//log the error using our custom logger
			logger.logError(message, errorData, true);
		};
	}

})();