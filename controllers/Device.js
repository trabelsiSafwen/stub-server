'use strict';

var utils = require('../utils/writer.js');
var Device = require('../service/DeviceService');

module.exports.postCurrentDevice = function postCurrentDevice (req, res, next, body) {
  Device.postCurrentDevice(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
