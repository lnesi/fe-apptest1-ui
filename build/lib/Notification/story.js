"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Type = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: 'Notification'
};
exports["default"] = _default;

var Type = function Type() {
  return _react["default"].createElement("div", null, _react["default"].createElement("div", null, _react["default"].createElement(_["default"], {
    type: "success"
  }, "This is a success notification!")), _react["default"].createElement("div", null, _react["default"].createElement(_["default"], {
    type: "info"
  }, "This is a info notification!")), _react["default"].createElement("div", null, _react["default"].createElement(_["default"], {
    type: "warning"
  }, "This is a warning notification!")), _react["default"].createElement("div", null, _react["default"].createElement(_["default"], {
    type: "error"
  }, "This is a error notification!")));
};

exports.Type = Type;