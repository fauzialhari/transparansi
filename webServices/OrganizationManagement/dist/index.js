"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Organizations = require("@transparansi/store/dist/modules/Organizations");

var _Organizations2 = _interopRequireDefault(require("./Organizations"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default() {
  return _react["default"].createElement(_Organizations.OrganizationsStoreProvider, null, _react["default"].createElement(_Organizations2["default"], null));
};

exports["default"] = _default;