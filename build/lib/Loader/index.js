"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Loader;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Loader(props) {
  var type = props.type,
      loading = props.loading;

  if (loading) {
    if (type === 'bar') {
      return _react["default"].createElement("div", {
        className: "loadingBar"
      });
    } else {
      return _react["default"].createElement("div", {
        className: "loadingSpinner"
      }, _react["default"].createElement("span", {
        className: "loadingSpinner-inner"
      }), _react["default"].createElement("span", {
        className: "loadingSpinner-inner"
      }), _react["default"].createElement("span", {
        className: "loadingSpinner-inner"
      }), _react["default"].createElement("span", {
        className: "loadingSpinner-inner"
      }));
    }
  }

  return null;
}

Loader.defaultProps = {
  loading: true
};
Loader.propTypes = {
  loading: _propTypes["default"].bool,
  type: _propTypes["default"].oneOf(['bar', 'spinner'])
};