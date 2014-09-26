$(document).ready(function () {
  // get the HostWeb URL, title & logo image
  var hostWebUrl = decodeURIComponent($.getQueryStringValue("SPHostUrl"));
  var hostWebTitle = decodeURIComponent($.getQueryStringValue("SPHostTitle"));
  var hostWebLogoUrl = decodeURIComponent($.getQueryStringValue("SPHostLogoUrl"));

  // create chrome control settings
  var options = {
    siteUrl: hostWebUrl,
    siteTitle: hostWebTitle,
    appIconUrl: hostWebLogoUrl,
    appTitle: "Learning Path Manager",
    settingsLinks: [
      {
        linkUrl: "../Lists/LearningPaths",
        displayName: "LIST: Learning Paths"
      },
      {
        linkUrl: "../Lists/LearningItems",
        displayName: "LIST: Learning Items"
      }
    ]
  };
  
  // create the chrome control
  var nav = new SP.UI.Controls.Navigation("chrome_ctrl_container", options);

  // show chrome control
  nav.setVisible(true);

  // hide top app chrome (image & app name)
  nav.setBottomHeaderVisible(false);
});