"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useOrganizationsState = exports.useOrganizationsDispatcher = exports.OrganizationsStoreProvider = exports.actionTypes = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactHooks = require("@apollo/react-hooks");

var _graphqlTag = _interopRequireDefault(require("graphql-tag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        {\n          allOrganizations {\n            id\n            name\n          }\n        }\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var initialState = {
  organizations: []
};
var actionTypes = {
  QUERY_ALL_ORGANIZATIONS: 'QUERY_ALL_ORGANIZATIONS'
};
exports.actionTypes = actionTypes;
var organizationsStore = (0, _react.createContext)(initialState);
var Provider = organizationsStore.Provider;

var OrganizationsStoreProvider = function OrganizationsStoreProvider(_ref) {
  var children = _ref.children;

  var _useReducer = (0, _react.useReducer)(function (state, _ref2) {
    var type = _ref2.type,
        payload = _ref2.payload;

    switch (type) {
      case actionTypes.QUERY_ALL_ORGANIZATIONS:
        return _objectSpread({}, state, {
          organizations: payload
        });

      default:
        break;
    }
  }, initialState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  return _react["default"].createElement(Provider, {
    value: [state, dispatch]
  }, children);
};

exports.OrganizationsStoreProvider = OrganizationsStoreProvider;

var useOrganizationsDispatcher = function useOrganizationsDispatcher() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'QUERY_ALL_ORGANIZATIONS';

  var _useContext = (0, _react.useContext)(organizationsStore),
      _useContext2 = _slicedToArray(_useContext, 2),
      _ = _useContext2[0],
      dispatch = _useContext2[1];

  var theQuery;
  var onCompleted;

  switch (type) {
    case actionTypes.QUERY_ALL_ORGANIZATIONS:
      theQuery = (0, _graphqlTag["default"])(_templateObject());

      onCompleted = function onCompleted(data) {
        return dispatch({
          type: type,
          payload: data.allOrganizations
        });
      };

      break;

    default:
      throw new Error('wrong type param for the custom hooks');
  }

  var _useLazyQuery = (0, _reactHooks.useLazyQuery)(theQuery, {
    onCompleted: onCompleted
  }),
      _useLazyQuery2 = _slicedToArray(_useLazyQuery, 2),
      execute = _useLazyQuery2[0],
      loading = _useLazyQuery2[1].loading;

  return [execute, loading];
};

exports.useOrganizationsDispatcher = useOrganizationsDispatcher;

var useOrganizationsState = function useOrganizationsState() {
  return (0, _react.useContext)(organizationsStore)[0];
};

exports.useOrganizationsState = useOrganizationsState;