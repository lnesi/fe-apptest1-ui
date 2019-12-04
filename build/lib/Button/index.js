"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Button;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Button(props) {
  var type = props.type,
      label = props.label,
      size = props.size,
      mobileFull = props.mobileFull;
  var sizeClassName = size ? 'button--' + size : '';
  var typeClassName = type ? 'button--' + type : '';
  var mobileFullClassName = mobileFull ? 'button--mobileFull' : '';
  return _react["default"].createElement("div", {
    className: "button  ".concat(typeClassName, " ").concat(sizeClassName, " ").concat(mobileFullClassName)
  }, label);
}

Button.propTypes = {
  label: _propTypes["default"].string.isRequired,
  mobileFull: _propTypes["default"].bool,
  size: _propTypes["default"].oneOf(['big', 'small']),
  type: _propTypes["default"].oneOf(['primary', 'secondary', 'green', 'red', 'outlined', 'transparent'])
};