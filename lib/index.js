'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getClient = undefined;

var _client = require('./client');

exports.getClient = _client.getClient;

var transactionsReduxSocketio = {
  getClient: _client.getClient
};
exports.default = transactionsReduxSocketio;