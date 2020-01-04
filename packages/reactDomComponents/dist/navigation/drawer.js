"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Drawer = _interopRequireDefault(require("@material-ui/core/Drawer"));

var _Hidden = _interopRequireDefault(require("@material-ui/core/Hidden"));

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    drawer: _defineProperty({}, theme.breakpoints.up('sm'), {
      width: theme.drawerWidth + 0,
      flexShrink: 0
    }),
    drawerPaper: {
      width: theme.drawerWidth + 0
    }
  };
});

var _default = function _default(_ref) {
  var isMobileMenuOpen = _ref.isMobileMenuOpen,
      onCloseMobileMenu = _ref.onCloseMobileMenu,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["isMobileMenuOpen", "onCloseMobileMenu", "children"]);

  return _react["default"].createElement("nav", {
    className: useStyles().drawer,
    "aria-label": "mailbox folders"
  }, _react["default"].createElement(_Hidden["default"], {
    smUp: true
  }, _react["default"].createElement(_Drawer["default"], {
    variant: "temporary",
    anchor: (0, _styles.useTheme)().direction === 'rtl' ? 'right' : 'left',
    open: isMobileMenuOpen,
    onClose: onCloseMobileMenu,
    classes: {
      paper: useStyles().drawerPaper
    },
    ModalProps: {
      keepMounted: true // Better open performance on mobile.

    }
  }, children)), _react["default"].createElement(_Hidden["default"], {
    xsDown: true
  }, _react["default"].createElement(_Drawer["default"], {
    classes: {
      paper: useStyles().drawerPaper
    },
    variant: "permanent",
    open: true
  }, children)));
};

exports["default"] = _default;