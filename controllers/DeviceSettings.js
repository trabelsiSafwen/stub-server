'use strict';

var utils = require('../utils/writer.js');
var DeviceSettings = require('../service/DeviceSettingsService');

module.exports.getCurrentDeviceSettings = function getCurrentDeviceSettings (req, res, next) {
  DeviceSettings.getCurrentDeviceSettings()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putCurrentDeviceSettings = function putCurrentDeviceSettings (req, res, next, body) {
  DeviceSettings.putCurrentDeviceSettings(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
