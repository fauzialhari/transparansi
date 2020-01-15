"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _auth = require("@transparansi/store/dist/modules/auth");

var _webOrganizationManagement = _interopRequireDefault(require("@transparansi/web-organization-management"));

var _default2 = _interopRequireDefault(require("@transparansi/dom-components/dist/default"));

var _appBar = _interopRequireDefault(require("@transparansi/dom-components/dist/surfaces/appBar"));

var _drawer = _interopRequireDefault(require("@transparansi/dom-components/dist/navigation/drawer"));

var _main = _interopRequireDefault(require("@transparansi/dom-components/dist/surfaces/main"));

var _typography = _interopRequireDefault(require("@transparansi/dom-components/dist/data-display/typography"));

var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Menu = _interopRequireDefault(require("@material-ui/icons/Menu"));

var _Hidden = _interopRequireDefault(require("@material-ui/core/Hidden"));

var _home = _interopRequireDefault(require("./pages/home"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Dasboard = function Dasboard() {
  var _useState = (0, _react.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      isMobileMenuOpen = _useState2[0],
      setMobileMenu = _useState2[1];

  var _useAuth = (0, _auth.useAuth)(),
      isLogin = _useAuth.state.isLogin;

  return (// <Router>
    _react["default"].createElement("div", null, _react["default"].createElement(_reactRouterDom.Route, {
      path: "/dashboard"
    }, isLogin ? _react["default"].createElement(_default2["default"], null, _react["default"].createElement("section", {
      className: 'Dasboard'
    }, _react["default"].createElement(_appBar["default"], {
      position: "sticky"
    }, _react["default"].createElement(_Toolbar["default"], null, _react["default"].createElement(_Hidden["default"], {
      smUp: true
    }, _react["default"].createElement(_IconButton["default"], {
      color: "inherit",
      onClick: function onClick() {
        return setMobileMenu(!isMobileMenuOpen);
      }
    }, _react["default"].createElement(_Menu["default"], null))), "Dasboard")), _react["default"].createElement(_drawer["default"], {
      isMobileMenuOpen: isMobileMenuOpen,
      onCloseMobileMenu: function onCloseMobileMenu() {
        return setMobileMenu(false);
      }
    }, "Dashboard"), _react["default"].createElement(_main["default"], null, _react["default"].createElement(_reactRouterDom.Switch, null, _react["default"].createElement(_reactRouterDom.Route, {
      exact: true,
      path: "/dashboard",
      component: _home["default"]
    }), _react["default"].createElement(_reactRouterDom.Route, {
      path: "/dashboard/organization",
      component: _webOrganizationManagement["default"]
    }), _react["default"].createElement(_reactRouterDom.Route, {
      component: function component() {
        return _react["default"].createElement("div", null, "Look's like you are get lost in Dashboard, Do you need help?");
      }
    }))))) : _react["default"].createElement(_reactRouterDom.Redirect, {
      to: {
        pathname: '/',
        state: {
          from: '/dashboard'
        }
      }
    }))) // </Router>

  );
};

var _default = Dasboard;
exports["default"] = _default;