"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _Organizations = require("@transparansi/store/dist/modules/Organizations");

var _Organizations2 = _interopRequireDefault(require("./Organizations"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default() {
  var _useRouteMatch = (0, _reactRouterDom.useRouteMatch)(),
      path = _useRouteMatch.path;

  return _react["default"].createElement(_Organizations.OrganizationsStoreProvider, null, _react["default"].createElement(_reactRouterDom.Switch, null, _react["default"].createElement(_reactRouterDom.Route, {
    path: "".concat(path, "/:id")
  }, _react["default"].createElement(_Organizations2["default"], null))));
};

exports["default"] = _default;