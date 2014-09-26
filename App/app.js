(function () {
	'use strict';

	// create the app
	var app = angular.module('app', [
		// inject OOTB AngularJS modules
		'ngRoute',
		'ngSanitize',

		// my custom modules
		'common'
	]);

	// app startup code
	app.run(['$route', function ($route) {
		// stuff that should happen before the app loads
	}]);
})();
