const appConfig = require("../../config/app-config");

function getFullURL(uri) {
  if (!uri) return null;
  return `${appConfig.appUrl}${uri}`;
}

module.exports = getFullURL;