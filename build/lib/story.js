"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Test = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _lib = _interopRequireDefault(require("../../dist/lib"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: 'Test'
};
exports["default"] = _default;

var Test = function Test() {
  console.log(_lib["default"]);
  return _react["default"].createElement("div", null, _react["default"].createElement("div", {
    label: "This is badge"
  }));
};

exports.Test = Test;