'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Client;
function Client(config, apiModules) {
  if (!apiModules) {
    throw new Error('No API Modules given for Client constructor');
  }

  for (var apiKey in apiModules) {
    this[apiKey] = new apiModules[apiKey](config);
  }
}