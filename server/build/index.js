"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _config = require("./config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use(_express.default.static(_path.default.join(__dirname, '../../client/build')));
app.use('*', (_, res) => res.sendFile(_path.default.join(__dirname, '../../client/build/index.html')));
app.listen(_config.port, () => {
  console.log(`App is ready on port ${_config.port}`);
});