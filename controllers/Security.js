'use strict';

var utils = require('../utils/writer.js');
var Security = require('../service/SecurityService');

module.exports.getProfilesByTaskIdAndScreenCode = function getProfilesByTaskIdAndScreenCode (req, res, next, taskId, screenCode) {
  Security.getProfilesByTaskIdAndScreenCode(taskId, screenCode)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
