'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fetchLite = require('fetch-lite');

var _fetchLite2 = _interopRequireDefault(_fetchLite);

var _btoaLite = require('btoa-lite');

var _btoaLite2 = _interopRequireDefault(_btoaLite);

var _queryString = require('query-string');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DEFAULT_API_URL = 'https://api.github.com';
var METHODS_WITH_NO_BODY = ['GET', 'HEAD', 'DELETE'];

var BaseGitHubApi = function () {
  function BaseGitHubApi() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, BaseGitHubApi);

    var token = config.token,
        username = config.username,
        password = config.password,
        _config$rootUrl = config.rootUrl,
        rootUrl = _config$rootUrl === undefined ? DEFAULT_API_URL : _config$rootUrl,
        _config$headers = config.headers,
        headers = _config$headers === undefined ? {} : _config$headers;

    this._rootUrl = rootUrl;
    this._headers = headers;

    if (token) {
      this._headers.authorization = 'token ' + token;
    } else if (config.username && config.password) {
      var basicAuth = (0, _btoaLite2.default)(username + ':' + password);
      this._headers.authorization = 'Basic ' + basicAuth;
    }
  }

  _createClass(BaseGitHubApi, [{
    key: 'doRequest',
    value: function doRequest(url) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var query = options.query,
          body = options.body,
          _options$method = options.method,
          method = _options$method === undefined ? 'GET' : _options$method;

      var headers = this._headers;
      var apiUrl = '' + url;

      if (apiUrl.indexOf('?') === -1 && query) {
        apiUrl = apiUrl + '?' + (0, _queryString.stringify)(query);
      }

      if (apiUrl.indexOf('//') === -1) {
        apiUrl = '' + this._rootUrl + apiUrl;
      }

      var fetchConfig = { headers: headers, method: method };

      if (METHODS_WITH_NO_BODY.indexOf(method) === -1 && body) {
        fetchConfig.body = body;
      }

      return (0, _fetchLite2.default)(apiUrl, fetchConfig);
    }
  }]);

  return BaseGitHubApi;
}();

exports.default = BaseGitHubApi;