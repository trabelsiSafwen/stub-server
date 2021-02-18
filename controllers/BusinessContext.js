'use strict';

var utils = require('../utils/writer.js');
var BusinessContext = require('../service/BusinessContextService');

module.exports.getDocumentsByBusinessContextId = function getDocumentsByBusinessContextId (req, res, next, businessContextId) {
  BusinessContext.getDocumentsByBusinessContextId(businessContextId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTasksByBusinessContextId = function getTasksByBusinessContextId (req, res, next, businessContextId) {
  BusinessContext.getTasksByBusinessContextId(businessContextId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getWorkflowByBusinessContextId = function getWorkflowByBusinessContextId (req, res, next, businessContextId) {
  BusinessContext.getWorkflowByBusinessContextId(businessContextId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
