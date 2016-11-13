'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (config) {
  return new _client2.default(config, {
    PullRequests: _pulls2.default,
    Repositories: _repos2.default,
    PageLinks: _paging2.default
  });
};

var _client = require('./client');

var _client2 = _interopRequireDefault(_client);

var _pulls = require('./pulls');

var _pulls2 = _interopRequireDefault(_pulls);

var _repos = require('./repos');

var _repos2 = _interopRequireDefault(_repos);

var _paging = require('./paging');

var _paging2 = _interopRequireDefault(_paging);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }