"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _auth = require("@transparansi/store/dist/modules/auth");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Landing = function Landing() {
  var _useRouteMatch = (0, _reactRouterDom.useRouteMatch)(),
      path = _useRouteMatch.path;

  var _useAuth = (0, _auth.useAuth)(),
      dispatch = _useAuth.dispatch;

  var history = (0, _reactRouterDom.useHistory)();
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_reactRouterDom.Switch, null, _react["default"].createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/"
  }, _react["default"].createElement("div", {
    className: "landing"
  }, "This is Landing"), _react["default"].createElement("button", {
    onClick: function onClick() {
      dispatch({
        type: 'Log In'
      });
      history.push('/dashboard');
    }
  }, "Login"))));
};

var _default = Landing;
exports["default"] = _default;