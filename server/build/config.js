"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.port = void 0;

var _dotenv = require("dotenv");

(0, _dotenv.config)();
const port = process.env.PORT || 5000;
exports.port = port;