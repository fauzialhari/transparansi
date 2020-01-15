"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _apolloClient = require("apollo-client");

var _apolloCacheInmemory = require("apollo-cache-inmemory");

var _apolloLinkHttp = require("apollo-link-http");

var _user = require("./modules/user");

var cache = new _apolloCacheInmemory.InMemoryCache();
var link = new _apolloLinkHttp.HttpLink({
  uri: 'https://api.graph.cool/simple/v1/ck3vimh2334cb0160q3mq5jmt'
});
var client = new _apolloClient.ApolloClient({
  cache: cache,
  link: link,
  typeDefs: _user.typeDefs,
  resolvers: _user.resolvers
});
cache.writeData({
  data: {
    allUsers: true
  }
});
var _default = client;
exports["default"] = _default;