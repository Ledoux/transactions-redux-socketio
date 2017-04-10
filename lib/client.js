'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getClient = getClient;

var _socket = require('socket.io-client');

var _socket2 = _interopRequireDefault(_socket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getClient() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var NAME_SPACE = config.NAME_SPACE || window && window.__CONFIG__ && window.__CONFIG__.NAME_SPACE || '/transactions';
  var url = config.url || '';
  var connectUrl = '' + url + NAME_SPACE;
  var socketio = (0, _socket2.default)(connectUrl, { transports: ['websocket'] });
  return {
    socketio: socketio
  };
}