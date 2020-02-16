"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _Organizations = require("@transparansi/store/dist/modules/Organizations");

var _cardMedia = _interopRequireDefault(require("@transparansi/dom-components/dist/surfaces/card/cardMedia"));

var _users = _interopRequireDefault(require("./users"));

var _about = _interopRequireDefault(require("./about"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Organizations = function Organizations(props) {
  var _useRouteMatch = (0, _reactRouterDom.useRouteMatch)(),
      path = _useRouteMatch.path;

  var _useParams = (0, _reactRouterDom.useParams)(),
      id = _useParams.id;

  var _useOrganizationsStat = (0, _Organizations.useOrganizationsState)(),
      organizations = _useOrganizationsStat.organizations;

  console.log(props);
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_reactRouterDom.Switch, null, _react["default"].createElement(_reactRouterDom.Route, {
    path: "".concat(path, "/users")
  }, _react["default"].createElement(_users["default"], null)), _react["default"].createElement(_reactRouterDom.Route, {
    path: "".concat(path, "/about")
  }, _react["default"].createElement(_about["default"], null)), _react["default"].createElement(_reactRouterDom.Route, {
    exact: true,
    path: "".concat(path, "/")
  }, JSON.stringify(organizations.find(function (org) {
    return org.id === id;
  })))));
};

var _default = Organizations;
exports["default"] = _default;