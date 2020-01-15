"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolvers = exports.typeDefs = void 0;

var _graphqlTag = _interopRequireDefault(require("graphql-tag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  extend type Query {\n    isLoggedIn: Boolean!\n    cartItems: [ID!]!\n  }\n\n  extend type Launch {\n    isInCart: Boolean!\n  }\n\n  extend type Mutation {\n    addOrRemoveFromCart(id: ID!): [Launch]\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var typeDefs = (0, _graphqlTag["default"])(_templateObject());
exports.typeDefs = typeDefs;
var resolvers = {};
exports.resolvers = resolvers;