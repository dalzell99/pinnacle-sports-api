'use strict';

var operations = {
	// Customer API
	getClientBalance: {
		type: 'get',
		version: 'v1',
		endpoint: 'client/balance'
	},
	getTranslations: {
		type: 'get',
		version: 'v1',
		endpoint: 'translations',
		required: ['cultureCodes', 'baseTexts']
	},

	// Lines API
	getFixtures: {
		type: 'get',
		version: 'v1',
		endpoint: 'fixtures',
		required: ['sportId']
	},
	getSpecialFixtures: {
		type: 'get',
		version: 'v1',
		endpoint: 'fixtures/special',
		required: ['sportId']
	},
	getSettledFixtures: {
		type: 'get',
		version: 'v1',
		endpoint: 'fixtures/settled',
		required: ['sportId']
	},
	getSettledSpecialFixtures: {
		type: 'get',
		version: 'v1',
		endpoint: 'fixtures/special/settled',
		required: ['sportId']
	},
	getOdds: {
		type: 'get',
		version: 'v1',
		endpoint: 'odds',
		required: ['sportId']
	},
	getParlayOdds: {
		type: 'get',
		version: 'v1',
		endpoint: 'odds/parlay',
		required: ['sportId']
	},
	getTeaserOdds: {
		type: 'get',
		version: 'v1',
		endpoint: 'odds/teaser',
		required: ['teaserid']
	},
	getSpecialOdds: {
		type: 'get',
		version: 'v1',
		endpoint: 'odds/special',
		required: ['sportId']
	},
	getLine: {
		version: 'v1',
		endpoint: 'line',
		required: ['sportId', 'leagueid', 'eventid', 'periodNumber', 'betType', 'oddsFormat']
	},
	getParlayLines: {
		type: 'post',
		version: 'v1',
		endpoint: 'line/parlay',
		required: ['oddsFormat', 'legs']
	},
	getTeaserLines: {
		type: 'post',
		version: 'v1',
		endpoint: 'line/teaser',
		required: ['teaserid', 'oddsFormat', 'legs']
	},
	getSpecialLines: {
		type: 'get',
		version: 'v1',
		endpoint: 'line/special',
		required: ['specialId', 'oddsFormat', 'contestantId']
	},
	getSports: {
		type: 'get',
		version: 'v2',
		endpoint: 'sports'
	},
	getLeagues: {
		type: 'get',
		version: 'v2',
		endpoint: 'leagues',
		required: ['sportId']
	},
	getPeriods: {
		type: 'get',
		version: 'v1',
		endpoint: 'periods',
		required: ['sportId']
	},
	getInrunning: {
		type: 'get',
		version: 'v1',
		endpoint: 'inrunning'
	},
	getTeaserGroups: {
		type: 'get',
		version: 'v1',
		endpoint: 'teaser/groups',
		required: ['oddsFormat']
	},
	getCancellationReasons: {
		type: 'get',
		version: 'v1',
		endpoint: 'cancellationreasons'
	},
	getCurrencies: {
		type: 'get',
		version: 'v2',
		endpoint: 'currencies'
	},

	// Bets API
	placeBet: {
		type: 'post',
		version: 'v2',
		endpoint: 'bets/straight',
		required: ['uniqueRequestId', 'acceptBetterLine', 'oddsFormat', 'stake', 'winRiskStake', 'sportId', 'eventId', 'periodNumber', 'betType', 'lineId']
	},
	placeParlayBet: {
		type: 'post',
		version: 'v1',
		endpoint: 'bets/parlay',
		required: ['uniqueRequestId', 'acceptBetterLine', 'oddsFormat', 'riskAmount', 'roundRobinOptions', 'legs']
	},
	placeTeaserBet: {
		type: 'post',
		version: 'v1',
		endpoint: 'bets/teaser',
		required: ['uniqueRequestId', 'teaserId', 'oddsFormat', 'winRiskStake', 'stake', 'legs']
	},
	placeSpecialBet: {
		type: 'post',
		version: 'v1',
		endpoint: 'bets/special',
		required: ['bets']
	},
	getBets: {
		type: 'get',
		version: 'v3',
		endpoint: 'bets'
	},
	getBettingStatus: {
		type: 'get',
		version: 'v1',
		endpoint: 'bets/betting-status'
	}
};

module.exports = operations;