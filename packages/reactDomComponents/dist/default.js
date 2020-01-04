"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var theme = (0, _styles.createMuiTheme)({
  drawerWidth: 240
});

var DefaultThemeProvider = function DefaultThemeProvider(_ref) {
  var children = _ref.children;
  return _react["default"].createElement(_styles.ThemeProvider, {
    theme: theme
  }, children);
};

var _default = DefaultThemeProvider;
exports["default"] = _default;