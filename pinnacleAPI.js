'use strict';

var _ = require('lodash');
var request = require('request');
var qs = require('qs');
var operations = require('./pinnacleOperations');

var PinnacleAPI = function(username, password) {
	if (!username || !password){
		throw new Error('No username and/or password provided in createClient().');
	}

	var auth = `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`;

	this.request = (endpoint, options) => {
		return new Promise((resolve, reject) => {
			const operation = operations[endpoint];

			if (_.isUndefined(operation)) {
				reject(`Endpoint ${endpoint} is missing from operations`);
			}

			(operation.required || []).forEach(key => {
				if (_.isUndefined(options[key])) {
					reject(`${key} is required and is missing from options`);
				}
			});

			const url = `https://api.pinnacle.com/${operation.version}/${operation.endpoint}?${qs.stringify(options)}`
			var requestOptions = {
				url,
				rejectUnauthorized: false,
				headers: {
					'Authorization': auth
				}
			};

			request[operation.type](requestOptions, (err, response, body) => {
				if (err) {
					reject(err);
				}

				if (!body) {
					resolve();
				}

				try {
					resolve(JSON.stringify(response));
				} catch (e) {
					reject(e);
				}
			});
		});
	};
}

module.exports = PinnacleAPI;