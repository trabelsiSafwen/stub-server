'use strict';


/**
 * Gets the current user profiles on the task.
 * Gets the current user profiles on the specified task, for a given screen code.
 *
 * taskId String The id of the task to get the profile.
 * screenCode String The screen code for the which the profile must be retrieved.
 * returns UserProfiles
 **/
exports.getProfilesByTaskIdAndScreenCode = function(taskId,screenCode) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "profiles" : [ "profiles", "profiles" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

