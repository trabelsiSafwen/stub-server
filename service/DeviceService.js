'use strict';


/**
 * Create 'Device'.
 * Apple Push Notification service (APNs) must know the address of a user's device before it can send notifications to that device. This address takes the form of a device token unique to both the device and your app. At launch time, your app communicates with APNs and receives its device  token, which you then forward to your provider server.
 *
 * body PostCurrentDevice The device token for the user’s device.
 * returns ActionResult
 **/
exports.postCurrentDevice = function(body) {
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

