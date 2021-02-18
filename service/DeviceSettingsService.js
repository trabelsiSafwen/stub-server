'use strict';


/**
 * Retrieves the settings for the current logged in user.
 * Retrieves the settings for the current logged in user.
 *
 * returns DeviceSettings
 **/
exports.getCurrentDeviceSettings = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Updates the settings for the current logged in user.
 * Updates the settings for the current logged in user.
 *
 * body DeviceSettings The settings for the current logged in user to update.
 * returns ActionResult
 **/
exports.putCurrentDeviceSettings = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "success" : true,
  "messages" : [ {
    "severity" : "ERROR",
    "message" : "message"
  }, {
    "severity" : "ERROR",
    "message" : "message"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

