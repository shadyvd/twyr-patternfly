'use strict';

const getChannelURL = require('ember-source-channel-url');

module.exports = async function () {
	return {
		"scenarios": [{
				"name": 'ember-lts-3.16',
				"npm": {
					"devDependencies": {
						"ember-source": '~3.16.0'
					}
				}
			},
			{
				"name": 'ember-release',
				"npm": {
					"devDependencies": {
						"ember-source": await getChannelURL('release')
					}
				}
			},
			{
				"name": 'ember-beta',
				"npm": {
					"devDependencies": {
						"ember-source": await getChannelURL('beta')
					}
				}
			},
			{
				"name": 'ember-canary',
				"npm": {
					"devDependencies": {
						"ember-source": await getChannelURL('canary')
					}
				}
			},
			{
				"name": 'ember-classic',
				"env": {
					"EMBER_OPTIONAL_FEATURES": JSON.stringify({
						"application-template-wrapper": true,
						"default-async-observers": false,
						"jquery-integration": true,
						"template-only-glimmer-components": false
					})
				},
				"npm": {
					"ember": {
						"edition": 'classic'
					}
				}
			}
		]
	};
};
