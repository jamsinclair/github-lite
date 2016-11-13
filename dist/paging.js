'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getPageLinks(link) {
  var links = {};
  if (typeof link != 'string') {
    return links;
  }

  link.replace(/<([^>]*)>;\s*rel="([\w]*)\"/g, function (m, uri, type) {
    links[type] = uri;
  });
  return links;
}

function getPageUrl(link, which) {
  var url = getPageLinks(link)[which];
  return url ? Promise.resolve(url) : Promise.reject('No ' + which + ' page link found');
}

var PageLinksApi = function (_BaseGitHubApi) {
  _inherits(PageLinksApi, _BaseGitHubApi);

  function PageLinksApi() {
    _classCallCheck(this, PageLinksApi);

    return _possibleConstructorReturn(this, (PageLinksApi.__proto__ || Object.getPrototypeOf(PageLinksApi)).apply(this, arguments));
  }

  _createClass(PageLinksApi, [{
    key: 'hasNext',
    value: function hasNext(link) {
      return getPageLinks(link).next;
    }
  }, {
    key: 'getNext',
    value: function getNext(link) {
      var _this2 = this;

      return getPageUrl(link, 'next').then(function (url) {
        return _this2.doRequest(url);
      });
    }
  }, {
    key: 'hasPrev',
    value: function hasPrev(link) {
      return getPageLinks(link).prev;
    }
  }, {
    key: 'getPrev',
    value: function getPrev(link) {
      var _this3 = this;

      return getPageUrl(link, 'prev').then(function (url) {
        return _this3.doRequest(url);
      });
    }
  }, {
    key: 'hasFirst',
    value: function hasFirst(link) {
      return getPageLinks(link).first;
    }
  }, {
    key: 'getFirst',
    value: function getFirst(link) {
      var _this4 = this;

      return getPageUrl(link, 'first').then(function (url) {
        return _this4.doRequest(url);
      });
    }
  }, {
    key: 'hasLast',
    value: function hasLast(link) {
      return getPageLinks(link).last;
    }
  }, {
    key: 'getLast',
    value: function getLast(link) {
      var _this5 = this;

      return getPageUrl(link, 'last').then(function (url) {
        return _this5.doRequest(url);
      });
    }
  }]);

  return PageLinksApi;
}(_api2.default);

exports.default = PageLinksApi;