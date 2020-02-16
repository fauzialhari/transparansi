"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _Breadcrumbs = _interopRequireDefault(require("@material-ui/core/Breadcrumbs"));

var _Link = _interopRequireDefault(require("@material-ui/core/Link"));

var _typography = _interopRequireDefault(require("../data-display/typography"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = function _default(props) {
  var path = (0, _reactRouterDom.useLocation)();
  console.log(path);
  var h = (0, _reactRouterDom.useHistory)();
  console.log(h);
  var d = (0, _reactRouterDom.useRouteMatch)();
  console.log(d);
  var pa = (0, _reactRouterDom.useParams)();
  console.log(pa);

  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

  return _react["default"].createElement(_Breadcrumbs["default"], _extends({
    "aria-label": "breadcrumb"
  }, props), _react["default"].createElement(_Link["default"], {
    color: "inherit",
    href: "/",
    onClick: handleClick
  }, "Material-UI"), _react["default"].createElement(_Link["default"], {
    color: "inherit",
    href: "/getting-started/installation/",
    onClick: handleClick
  }, "Core"), _react["default"].createElement(_typography["default"], {
    color: "textPrimary"
  }, "Breadcrumb"));
};

exports["default"] = _default;