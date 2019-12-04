"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Spinner = exports.Bar = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: 'Loader'
};
exports["default"] = _default;

var Bar = function Bar() {
  return _react["default"].createElement("div", null, _react["default"].createElement(_["default"], {
    type: "bar",
    loading: true
  }));
};

exports.Bar = Bar;

var Spinner = function Spinner() {
  return _react["default"].createElement("div", null, _react["default"].createElement("div", null, _react["default"].createElement(_["default"], {
    type: "spinner",
    loading: true
  })));
};

exports.Spinner = Spinner;