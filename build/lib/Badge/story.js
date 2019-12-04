"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sizes = exports.Types = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: 'Badge'
};
exports["default"] = _default;

var Types = function Types() {
  return _react["default"].createElement("div", null, _react["default"].createElement("div", null, _react["default"].createElement(_["default"], {
    type: "primary",
    label: "Primary"
  })), _react["default"].createElement("div", null, _react["default"].createElement(_["default"], {
    type: "secondary",
    label: "Secondary"
  })), _react["default"].createElement("div", null, _react["default"].createElement(_["default"], {
    type: "dark",
    label: "Dark"
  })), _react["default"].createElement("div", null, _react["default"].createElement(_["default"], {
    type: "success",
    label: "Success"
  })), _react["default"].createElement("div", null, _react["default"].createElement(_["default"], {
    type: "warning",
    label: "Warning"
  })), _react["default"].createElement("div", null, _react["default"].createElement(_["default"], {
    type: "error",
    label: "Error"
  })));
};

exports.Types = Types;

var Sizes = function Sizes() {
  return _react["default"].createElement("div", null, _react["default"].createElement("div", null, _react["default"].createElement(_["default"], {
    size: "small",
    label: "Small"
  })), _react["default"].createElement("div", null, _react["default"].createElement(_["default"], {
    label: "Default"
  })), _react["default"].createElement("div", null, _react["default"].createElement(_["default"], {
    size: "big",
    label: "Big"
  })));
};

exports.Sizes = Sizes;