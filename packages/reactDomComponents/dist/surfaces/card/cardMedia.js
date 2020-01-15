"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MediaCard;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _Card = _interopRequireDefault(require("@material-ui/core/Card"));

var _CardActionArea = _interopRequireDefault(require("@material-ui/core/CardActionArea"));

var _CardActions = _interopRequireDefault(require("@material-ui/core/CardActions"));

var _CardContent = _interopRequireDefault(require("@material-ui/core/CardContent"));

var _CardMedia = _interopRequireDefault(require("@material-ui/core/CardMedia"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var useStyles = (0, _styles.makeStyles)({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

function MediaCard(_ref) {
  var title = _ref.title,
      description = _ref.description,
      cardProps = _ref.cardProps,
      cardActionAreaProps = _ref.cardActionAreaProps,
      cardMediaProps = _ref.cardMediaProps;
  var classes = useStyles();
  return _react["default"].createElement(_Card["default"], _extends({
    className: classes.card
  }, cardProps), _react["default"].createElement(_CardActionArea["default"], cardActionAreaProps, _react["default"].createElement(_CardMedia["default"], _extends({
    className: classes.media
  }, cardMediaProps)), _react["default"].createElement(_CardContent["default"], null, _react["default"].createElement(_Typography["default"], {
    gutterBottom: true,
    variant: "h5",
    component: "h2"
  }, title), _react["default"].createElement(_Typography["default"], {
    variant: "body2",
    color: "textSecondary",
    component: "p"
  }, description))));
}