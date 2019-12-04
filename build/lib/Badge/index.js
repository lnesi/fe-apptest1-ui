"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Badge = Badge;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Badge(props) {
  var size = props.size,
      type = props.type,
      label = props.label;
  var sizeClassName = size ? 'badge--' + size : '';
  var typeClassName = type ? 'badge--' + type : '';
  return _react["default"].createElement("div", {
    className: "badge ".concat(typeClassName, " ").concat(sizeClassName)
  }, label);
}

Badge.propTypes = {
  label: _propTypes["default"].string.isRequired,
  size: _propTypes["default"].oneOf(['big', 'small']),
  type: _propTypes["default"].oneOf(['primary', 'secondary', 'dark', 'success', 'warning', 'error'])
};
var _default = Badge;
exports["default"] = _default;