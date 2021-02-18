'use strict';

var utils = require('../utils/writer.js');
var Task = require('../service/TaskService');

module.exports.getProfilesByTaskIdAndScreenCode = function getProfilesByTaskIdAndScreenCode (req, res, next, taskId, screenCode) {
  Task.getProfilesByTaskIdAndScreenCode(taskId, screenCode)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTaskById = function getTaskById (req, res, next, taskId) {
  Task.getTaskById(taskId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTaskSummaryById = function getTaskSummaryById (req, res, next, taskId) {
  Task.getTaskSummaryById(taskId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTasks = function getTasks (req, res, next, scope, type, q, page, size) {
  Task.getTasks(scope, type, q, page, size)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTasksHistory = function getTasksHistory (req, res, next, scope, lastNDays, page, size) {
  Task.getTasksHistory(scope, lastNDays, page, size)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.patchTaskById = function patchTaskById (req, res, next, body, taskId) {
  Task.patchTaskById(body, taskId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
