"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _users = _interopRequireDefault(require("./pages/users"));

var _about = _interopRequireDefault(require("./pages/about"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default() {
  var _useRouteMatch = (0, _reactRouterDom.useRouteMatch)(),
      path = _useRouteMatch.path,
      url = _useRouteMatch.url;

  return _react["default"].createElement("div", null, "this is organization", _react["default"].createElement(_reactRouterDom.Switch, null, _react["default"].createElement(_reactRouterDom.Route, {
    path: "".concat(path, "/users")
  }, _react["default"].createElement(_users["default"], null)), _react["default"].createElement(_reactRouterDom.Route, {
    path: "".concat(path, "/about")
  }, _react["default"].createElement(_about["default"], null))));
};

exports["default"] = _default;