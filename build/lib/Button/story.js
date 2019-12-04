"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mobileFull = exports.Sizes = exports.Types = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: 'Button'
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
    type: "green",
    label: "green"
  })), _react["default"].createElement("div", null, _react["default"].createElement(_["default"], {
    type: "red",
    label: "red"
  })), _react["default"].createElement("div", null, _react["default"].createElement(_["default"], {
    type: "outlined",
    label: "outlined"
  })), _react["default"].createElement("div", null, _react["default"].createElement(_["default"], {
    type: "transparent",
    label: "transparent"
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

var mobileFull = function mobileFull() {
  return _react["default"].createElement("div", null, _react["default"].createElement("div", null, "Enable Chrome Dev Tools and simulate mobile/tabelt"), _react["default"].createElement("div", null, _react["default"].createElement(_["default"], {
    mobileFull: true,
    label: "Full Width Mobile"
  })));
};

exports.mobileFull = mobileFull;