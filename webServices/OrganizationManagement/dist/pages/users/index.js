"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _typography = _interopRequireDefault(require("@transparansi/dom-components/dist/data-display/typography"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default() {
  return _react["default"].createElement("div", null, _react["default"].createElement(_typography["default"], {
    variant: 'h1',
    color: 'primary'
  }, "this is users of organization"));
};

exports["default"] = _default;