'use strict';


/**
 * Gets documents for a business context.
 * Gets documents by business context id.
 *
 * businessContextId String The business context id.
 * returns BusinessContextDocuments
 **/
exports.getDocumentsByBusinessContextId = function(businessContextId) {
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
 * Gets tasks by business context.
 * Gets tasks by business context id.
 *
 * businessContextId String The business context id.
 * returns BusinessContextTasks
 **/
exports.getTasksByBusinessContextId = function(businessContextId) {
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
 * Gets workflows for a business context.
 * Gets workflows by business context id.
 *
 * businessContextId String The business context id.
 * returns BusinessContextWorkflow
 **/
exports.getWorkflowByBusinessContextId = function(businessContextId) {
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

