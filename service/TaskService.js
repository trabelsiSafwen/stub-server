'use strict';

/**
 * Gets the current user profiles on the task.
 * Gets the current user profiles on the specified task, for a given screen code.
 *
 * taskId String The id of the task to get the profile.
 * screenCode String The screen code for the which the profile must be retrieved.
 * returns UserProfiles
 **/
exports.getProfilesByTaskIdAndScreenCode = function (taskId, screenCode) {
	return new Promise(function (resolve, reject) {
		var examples = {};
		examples['application/json'] = {
			profiles: ['profiles', 'profiles'],
		};
		if (Object.keys(examples).length > 0) {
			resolve(examples[Object.keys(examples)[0]]);
		} else {
			resolve();
		}
	});
};

/**
 * Get a task.
 * Gets the task corresponding to the given id.
 *
 * taskId String The task id.
 * returns Task
 **/
exports.getTaskById = function (taskId) {
	return new Promise(function (resolve, reject) {
		var examples = {};
		examples['application/json'] = '';
		if (Object.keys(examples).length > 0) {
			resolve(examples[Object.keys(examples)[0]]);
		} else {
			resolve();
		}
	});
};

/**
 * Get a task summary.
 * Gets the task summary corresponding to the given id.
 *
 * taskId String The task id.
 * returns TaskSummary
 **/
exports.getTaskSummaryById = function (taskId) {
	return new Promise(function (resolve, reject) {
		var examples = {};
		examples['application/json'] = '';
		if (Object.keys(examples).length > 0) {
			resolve(examples[Object.keys(examples)[0]]);
		} else {
			resolve();
		}
	});
};

/**
 * Gets the tasks summaries.
 * Gets the paginated list of tasks summaries corresponding to specified criteria.
 *
 * scope String The scope of the tasks.
 * type String The type of task to retrieve.
 * q String The search query (filter) if any. If not, the task will be returned unfiltered. (optional)
 * page Integer The maximum number of items to return per page. (optional)
 * size Integer The maximum number of items to return per page. (optional)
 * returns PagedTaskSummaries
 **/
exports.getTasks = function (scope, type, q, page, size) {
	return new Promise(function (resolve, reject) {
		const userData = [
			{
				id: 'leap:bbc704d9-43a3-4a56-aa22-a7b83919bb80',
				subject: 'AFFORDABLE HOUSING ERSTE BANK (2018-0501)',
				workflowDescription: 'AFS Validation',
				taskDefDescription: 'OPS HOD Validation for AFS',
				owner: 'piat',
				effectiveAssignee: null,
				activationTime: '2018-10-24T08:50:30.576+02:00',
				businessContextId: 'leap:baf7b3b1-596b-488c-987f-b8a8e4262b4a',
				_links: null,
			},
			{
				id: 'leap:bbc704d9-43a3-4a56-aa22-a7b83919bb81',
				subject: 'AFFORDABLE HOUSING ERSTE BANK (2018-0501)',
				workflowDescription: 'AFS Validation',
				taskDefDescription: 'OPS HOD Validation for AFS',
				owner: 'piat',
				effectiveAssignee: null,
				activationTime: '2018-10-24T08:50:30.576+02:00',
				businessContextId: 'leap:baf7b3b1-596b-488c-987f-b8a8e4262b4a',
				_links: null,
			},
			{
				id: 'leap:bbc704d9-43a3-4a56-aa22-a7b83919bb82',
				subject: 'AFFORDABLE HOUSING ERSTE BANK (2018-0501)',
				workflowDescription: 'AFS Validation',
				taskDefDescription: 'OPS HOD Validation for AFS',
				owner: 'piat',
				effectiveAssignee: null,
				activationTime: '2018-10-24T08:50:30.576+02:00',
				businessContextId: 'leap:baf7b3b1-596b-488c-987f-b8a8e4262b4a',
				_links: null,
			},
			{
				id: 'leap:bbc704d9-43a3-4a56-aa22-a7b83919bb83',
				subject: 'AFFORDABLE HOUSING ERSTE BANK (2018-0501)',
				workflowDescription: 'AFS Validation',
				taskDefDescription: 'OPS HOD Validation for AFS',
				owner: 'piat',
				effectiveAssignee: null,
				activationTime: '2018-10-24T08:50:30.576+02:00',
				businessContextId: 'leap:baf7b3b1-596b-488c-987f-b8a8e4262b4a',
				_links: null,
			},
			{
				id: 'leap:bbc704d9-43a3-4a56-aa22-a7b83919bb884',
				subject: 'AFFORDABLE HOUSING ERSTE BANK (2018-0501)',
				workflowDescription: 'AFS Validation',
				taskDefDescription: 'OPS HOD Validation for AFS',
				owner: 'piat',
				effectiveAssignee: null,
				activationTime: '2018-10-24T08:50:30.576+02:00',
				businessContextId: 'leap:baf7b3b1-596b-488c-987f-b8a8e4262b4a',
				_links: null,
			},
			{
				id: 'leap:bbc704d9-43a3-4a56-aa22-a7b83919bb886',
				subject: 'AFFORDABLE HOUSING ERSTE BANK (2018-0501)',
				workflowDescription: 'AFS Validation',
				taskDefDescription: 'OPS HOD Validation for AFS',
				owner: 'piat',
				effectiveAssignee: null,
				activationTime: '2018-10-24T08:50:30.576+02:00',
				businessContextId: 'leap:baf7b3b1-596b-488c-987f-b8a8e4262b4a',
				_links: null,
			},
			{
				id: 'leap:bbc704d9-43a3-4a56-aa22-a7b83919bb887',
				subject: 'AFFORDABLE HOUSING ERSTE BANK (2018-0501)',
				workflowDescription: 'AFS Validation',
				taskDefDescription: 'OPS HOD Validation for AFS',
				owner: 'piat',
				effectiveAssignee: null,
				activationTime: '2018-10-24T08:50:30.576+02:00',
				businessContextId: 'leap:baf7b3b1-596b-488c-987f-b8a8e4262b4a',
				_links: null,
			},
			{
				id: 'leap:bbc704d9-43a3-4a56-aa22-a7b83919bb888',
				subject: 'AFFORDABLE HOUSING ERSTE BANK (2018-0501)',
				workflowDescription: 'AFS Validation',
				taskDefDescription: 'OPS HOD Validation for AFS',
				owner: 'piat',
				effectiveAssignee: null,
				activationTime: '2018-10-24T08:50:30.576+02:00',
				businessContextId: 'leap:baf7b3b1-596b-488c-987f-b8a8e4262b4a',
				_links: null,
			},
			{
				id: 'leap:bbc704d9-43a3-4a56-aa22-a7b83919bb889',
				subject: 'AFFORDABLE HOUSING ERSTE BANK (2018-0501)',
				workflowDescription: 'AFS Validation',
				taskDefDescription: 'OPS HOD Validation for AFS',
				owner: 'piat',
				effectiveAssignee: null,
				activationTime: '2018-10-24T08:50:30.576+02:00',
				businessContextId: 'leap:baf7b3b1-596b-488c-987f-b8a8e4262b4a',
				_links: null,
			},
			{
				id: 'leap:bbc704d9-43a3-4a56-aa22-a7b83919bb890',
				subject: 'AFFORDABLE HOUSING ERSTE BANK (2018-0501)',
				workflowDescription: 'AFS Validation',
				taskDefDescription: 'OPS HOD Validation for AFS',
				owner: 'piat',
				effectiveAssignee: null,
				activationTime: '2018-10-24T08:50:30.576+02:00',
				businessContextId: 'leap:baf7b3b1-596b-488c-987f-b8a8e4262b4a',
				_links: null,
			},
			{
				id: 'leap:bbc704d9-43a3-4a56-aa22-a7b83919bb891',
				subject: 'AFFORDABLE HOUSING ERSTE BANK (2018-0501)',
				workflowDescription: 'AFS Validation',
				taskDefDescription: 'OPS HOD Validation for AFS',
				owner: 'piat',
				effectiveAssignee: null,
				activationTime: '2018-10-24T08:50:30.576+02:00',
				businessContextId: 'leap:baf7b3b1-596b-488c-987f-b8a8e4262b4a',
				_links: null,
			},
		];
		const delegatedData = [
			{
				id: 'leap:bbc704d9-43a3-4a56-aa22-a7b83919bb80',
				subject: 'AFFORDABLE HOUSING ERSTE BANK (2018-0501)',
				workflowDescription: 'AFS Validation',
				taskDefDescription: 'OPS HOD Validation for AFS',
				owner: 'Mohamed Ali',
				effectiveAssignee: null,
				activationTime: '2018-10-24T08:50:30.576+02:00',
				businessContextId: 'leap:baf7b3b1-596b-488c-987f-b8a8e4262b4a',
				_links: null,
			},
			{
				id: 'leap:bbc704d9-43a3-4a56-aa22-a7b83919bb81',
				subject: 'AFFORDABLE HOUSING ERSTE BANK (2018-0501)',
				workflowDescription: 'AFS Validation',
				taskDefDescription: 'OPS HOD Validation for AFS',
				owner: 'Mohamed Ali',
				effectiveAssignee: null,
				activationTime: '2018-10-24T08:50:30.576+02:00',
				businessContextId: 'leap:baf7b3b1-596b-488c-987f-b8a8e4262b4a',
				_links: null,
			},
			{
				id: 'leap:bbc704d9-43a3-4a56-aa22-a7b83919bb82',
				subject: 'AFFORDABLE HOUSING ERSTE BANK (2018-0501)',
				workflowDescription: 'AFS Validation',
				taskDefDescription: 'OPS HOD Validation for AFS',
				owner: 'Mohamed Ali',
				effectiveAssignee: null,
				activationTime: '2018-10-24T08:50:30.576+02:00',
				businessContextId: 'leap:baf7b3b1-596b-488c-987f-b8a8e4262b4a',
				_links: null,
			},
			{
				id: 'leap:bbc704d9-43a3-4a56-aa22-a7b83919bb83',
				subject: 'AFFORDABLE HOUSING ERSTE BANK (2018-0501)',
				workflowDescription: 'AFS Validation',
				taskDefDescription: 'OPS HOD Validation for AFS',
				owner: 'Mohamed Ali',
				effectiveAssignee: null,
				activationTime: '2018-10-24T08:50:30.576+02:00',
				businessContextId: 'leap:baf7b3b1-596b-488c-987f-b8a8e4262b4a',
				_links: null,
			},
			{
				id: 'leap:bbc704d9-43a3-4a56-aa22-a7b83919bb884',
				subject: 'AFFORDABLE HOUSING ERSTE BANK (2018-0501)',
				workflowDescription: 'AFS Validation',
				taskDefDescription: 'OPS HOD Validation for AFS',
				owner: 'Mohamed Ali',
				effectiveAssignee: null,
				activationTime: '2018-10-24T08:50:30.576+02:00',
				businessContextId: 'leap:baf7b3b1-596b-488c-987f-b8a8e4262b4a',
				_links: null,
			},
			{
				id: 'leap:bbc704d9-43a3-4a56-aa22-a7b83919bb886',
				subject: 'AFFORDABLE HOUSING ERSTE BANK (2018-0501)',
				workflowDescription: 'AFS Validation',
				taskDefDescription: 'OPS HOD Validation for AFS',
				owner: 'Mohamed Ali',
				effectiveAssignee: null,
				activationTime: '2018-10-24T08:50:30.576+02:00',
				businessContextId: 'leap:baf7b3b1-596b-488c-987f-b8a8e4262b4a',
				_links: null,
			},
			{
				id: 'leap:bbc704d9-43a3-4a56-aa22-a7b83919bb887',
				subject: 'AFFORDABLE HOUSING ERSTE BANK (2018-0501)',
				workflowDescription: 'AFS Validation',
				taskDefDescription: 'OPS HOD Validation for AFS',
				owner: 'Mohamed Ali',
				effectiveAssignee: null,
				activationTime: '2018-10-24T08:50:30.576+02:00',
				businessContextId: 'leap:baf7b3b1-596b-488c-987f-b8a8e4262b4a',
				_links: null,
			},
			{
				id: 'leap:bbc704d9-43a3-4a56-aa22-a7b83919bb888',
				subject: 'AFFORDABLE HOUSING ERSTE BANK (2018-0501)',
				workflowDescription: 'AFS Validation',
				taskDefDescription: 'OPS HOD Validation for AFS',
				owner: null,
				effectiveAssignee: null,
				activationTime: '2018-10-24T08:50:30.576+02:00',
				businessContextId: 'leap:baf7b3b1-596b-488c-987f-b8a8e4262b4a',
				_links: null,
			},
			{
				id: 'leap:bbc704d9-43a3-4a56-aa22-a7b83919bb889',
				subject: 'AFFORDABLE HOUSING ERSTE BANK (2018-0501)',
				workflowDescription: 'AFS Validation',
				taskDefDescription: 'OPS HOD Validation for AFS',
				owner: null,
				effectiveAssignee: null,
				activationTime: '2018-10-24T08:50:30.576+02:00',
				businessContextId: 'leap:baf7b3b1-596b-488c-987f-b8a8e4262b4a',
				_links: null,
			},
			{
				id: 'leap:bbc704d9-43a3-4a56-aa22-a7b83919bb890',
				subject: 'AFFORDABLE HOUSING ERSTE BANK (2018-0501)',
				workflowDescription: 'AFS Validation',
				taskDefDescription: 'OPS HOD Validation for AFS',
				owner: null,
				effectiveAssignee: null,
				activationTime: '2018-10-24T08:50:30.576+02:00',
				businessContextId: 'leap:baf7b3b1-596b-488c-987f-b8a8e4262b4a',
				_links: null,
			},
			{
				id: 'leap:bbc704d9-43a3-4a56-aa22-a7b83919bb891',
				subject: 'AFFORDABLE HOUSING ERSTE BANK (2018-0501)',
				workflowDescription: 'AFS Validation',
				taskDefDescription: 'OPS HOD Validation for AFS',
				owner: null,
				effectiveAssignee: null,
				activationTime: '2018-10-24T08:50:30.576+02:00',
				businessContextId: 'leap:baf7b3b1-596b-488c-987f-b8a8e4262b4a',
				_links: null,
			},
		];
		var examples = {};
		const data = scope === 'USER' ? userData : delegatedData;
		var totalPages = Math.ceil(data.length / size);
		examples['application/json'] = {
			page: {
				number: page,
				totalElements: data.length,
				size,
				totalPages,
			},
			_embedded: data.slice((page - 1) * size, (page - 1) * size + size),
			_links: {
				next: { href: `/v2/tasks?page=${page + 1}&size=${size}` },
				last: { href: `/v2/tasks?page=${totalPages}&size=${size}` },
				self: { href: `/v2/tasks?page=${page}&size=${size}` },
			},
		};
		console.log(examples);
		if (Object.keys(examples).length > 0) {
			resolve(examples[Object.keys(examples)[0]]);
		} else {
			resolve();
		}
	});
};

/**
 * Gets the task history.
 * Gets the task history for the last n days and a given scope in a paginated manner.
 *
 * scope String The scope of the tasks. Only the task of current user are available in this version. (optional)
 * lastNDays Integer Return the tasks completed in the last n days. (optional)
 * page Integer The maximum number of items to return per page. (optional)
 * size Integer The maximum number of items to return per page. (optional)
 * returns PagedTaskHistorySummaries
 **/
exports.getTasksHistory = function (scope, lastNDays, page, size) {
	return new Promise(function (resolve, reject) {
		var examples = {};
		examples['application/json'] = '';
		if (Object.keys(examples).length > 0) {
			resolve(examples[Object.keys(examples)[0]]);
		} else {
			resolve();
		}
	});
};

/**
 * Patch a task.
 * Patch the task corresponding to the given id.
 *
 * body Task The settings for the current logged in user to update.
 * taskId String The task id.
 * returns ActionResult
 **/
exports.patchTaskById = function (body, taskId) {
	return new Promise(function (resolve, reject) {
		var examples = {};
		examples['application/json'] = {
			success: true,
			messages: [
				{
					severity: 'ERROR',
					message: 'message',
				},
				{
					severity: 'ERROR',
					message: 'message',
				},
			],
		};
		if (Object.keys(examples).length > 0) {
			resolve(examples[Object.keys(examples)[0]]);
		} else {
			resolve();
		}
	});
};
