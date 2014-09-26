(function (undefined) {
	'use strict';

	// define teh service as a factory
	angular.module('common').factory('logger',
		['$log', 'config', logger]);

	// create factory
	function logger($log, config) {
		return {
			log: log,
			logError: logError,
			logSuccess: logSuccess,
			logWarning: logWarning
		};

		// public member implementation
		function log(message, data, source, showNotification) {
			writeLog(message, data, source, showNotification, "info");
		}
		function logError(message, data, source, showNotification) {
			writeLog(message, data, source, showNotification, "error");
		}
		function logSuccess(message, data, source, showNotification) {
			writeLog(message, data, source, showNotification, "success");
		}
		function logWarning(message, data, source, showNotification) {
			writeLog(message, data, source, showNotification, "warning");
		}

		// private implementation
		function writeLog(message, data, source, showNotification, notificationType) {
			var iconUrl, notiTitle;
			// default the showNotification to true if not specified
			showNotification = showNotification || true;

			// write to the AngularJS log & specify if error or not
			// sent to my service.
			var write = (notificationType === 'error')
				? $log.error
				: $log.log;
			source = source
				? '[' + source + '] '
				: '';
			// passed to angular $log service
			write(source, message, data);

			// now, let's build our own notification system for the app
			// this will be a friendly system with a good UX
			if (showNotification) {
				if (notificationType === 'info') {
					// if informational message not specified to be shown in the config, stop
					if (!config.showDebugNotiSetting) {
						return;
					} else {
						iconUrl = '../images/info.png';
						notiTitle = 'Lerning Path Manager: DEBUG LOG';
					}
				} else if (notificationType === 'error') {
					// if informational message not specified to be shown in the config, stop
					if (!config.showDebugNotiSetting) {
						return;
					} else {
						iconUrl = '../images/error.png';
						notiTitle = 'Lerning Path Manager: ERROR';
					}
				} else if (notificationType === 'warning') {
					// if informational message not specified to be shown in the config, stop
					if (!config.showDebugNotiSetting) {
						return;
					} else {
						iconUrl = '../images/warning.png';
						notiTitle = 'Lerning Path Manager: WARNING';
					}
				} else if (notificationType === 'success') {
					// if informational message not specified to be shown in the config, stop
					if (!config.showDebugNotiSetting) {
						return;
					} else {
						iconUrl = '../images/success.png';
						notiTitle = 'Lerning Path Manager';
					}
				}

				// create 'sharepoint' notification
				var notificationData = new SPStatusNotificationData("", STSHtmlEncode(message), iconUrl, null);
				var notification = new SPNotification(SPNotifications.ContainerID.Status,
					STSHtmlEncode(notiTitle),
					false,	//sticky or time out and go away
					null,	// tool tip
					null,	// call back
					notificationData);

				// show sharepoint notification tile
				notification.Show(
					false //animated
				);
			}
		}
	}

})();