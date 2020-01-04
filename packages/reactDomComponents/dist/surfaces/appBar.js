"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _AppBar = _interopRequireDefault(require("@material-ui/core/AppBar"));

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// const drawerWidth = 240;
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    appBar: _defineProperty({}, theme.breakpoints.up('sm'), {
      width: "calc(100% - ".concat(theme.drawerWidth, "px)"),
      marginLeft: theme.drawerWidth
    })
  };
});

var _default = function _default(props) {
  return _react["default"].createElement(_AppBar["default"], _extends({
    className: useStyles().appBar
  }, props));
};

exports["default"] = _default;