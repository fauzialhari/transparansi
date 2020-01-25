"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _Organizations = require("@transparansi/store/dist/modules/Organizations");

var _cardMedia = _interopRequireDefault(require("@transparansi/dom-components/dist/surfaces/card/cardMedia"));

var _users = _interopRequireDefault(require("./pages/users"));

var _about = _interopRequireDefault(require("./pages/about"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Organizations = function Organizations() {
  var _useRouteMatch = (0, _reactRouterDom.useRouteMatch)(),
      path = _useRouteMatch.path;

  var _useParams = (0, _reactRouterDom.useParams)(),
      id = _useParams.id;

  var _useOrganizationsDisp = (0, _Organizations.useOrganizationsDispatcher)(_Organizations.actionTypes.QUERY_ALL_ORGANIZATIONS),
      _useOrganizationsDisp2 = _slicedToArray(_useOrganizationsDisp, 2),
      dispatchOrganizations = _useOrganizationsDisp2[0],
      loading = _useOrganizationsDisp2[1];

  var state = (0, _Organizations.useOrganizationsState)();
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", null, JSON.stringify(state)), _react["default"].createElement("button", {
    onClick: function onClick() {
      return dispatchOrganizations();
    }
  }, "get"), _react["default"].createElement("div", null, loading ? 'loading' : 'tida loading'), _react["default"].createElement(_reactRouterDom.Switch, null, _react["default"].createElement(_reactRouterDom.Route, {
    path: "".concat(path, "/users")
  }, _react["default"].createElement(_users["default"], null)), _react["default"].createElement(_reactRouterDom.Route, {
    path: "".concat(path, "/about")
  }, _react["default"].createElement(_about["default"], null)), _react["default"].createElement(_reactRouterDom.Route, {
    exact: true,
    path: "".concat(path, "/")
  }, _react["default"].createElement(_cardMedia["default"], {
    title: id
  }))));
};

var _default = Organizations;
exports["default"] = _default;