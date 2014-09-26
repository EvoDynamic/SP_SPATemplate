(function (undefined) {
	'use strict';

	// define controller
	var controllerId = 'spAppChrome';
	angular.module('app').controller(controllerId,
		['$rootScope', 'common', spAppChrome]);

	// create controller
	function spAppChrome($rootScope, common) {
		var vm = this;
		var hostWebUrl;
		var hostWebTitle;
		var hostWebLogoUrl;
		var spChromeControlData;

		// init & activate controller
		init();

		// init controller
		function init() {
			// get the HostWeb URL, title & logo image
			hostWebUrl = decodeURIComponent($.getQueryStringValue("SPHostUrl"));
			hostWebTitle = decodeURIComponent($.getQueryStringValue("SPHostTitle"));
			hostWebLogoUrl = decodeURIComponent($.getQueryStringValue("SPHostLogoUrl"));

			// create chrome control settings
			spChromeControlData = {
				siteUrl: hostWebUrl,
				siteTitle: hostWebTitle,
				appIconUrl: hostWebLogoUrl,
				appTitle: "Learning Path Manager",
				settingsLinks: [
				  {
				  	linkUrl: "../Lists/LearningPaths",
				  	displayName: "[SHAREPOINT LIST]: Learning Paths"
				  },
				  {
				  	linkUrl: "../Lists/LearningItems",
				  	displayName: "[SHAREPOINT LIST]: Learning Items"
				  }
				]
			};

			// create the chrome control
			var nav = new SP.UI.Controls.Navigation("chrome_ctrl_container", spChromeControlData);

			// show chrome control
			nav.setVisible(true);

			// hide top app chrome (image & app name)
			nav.setBottomHeaderVisible(false);

			common.logger.log('controller loaded', null, controllerId);
			common.activateController([], controllerId);
		}
	}
})();