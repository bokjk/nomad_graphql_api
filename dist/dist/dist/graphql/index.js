"use strict";

var _graphqlYoga = require("graphql-yoga");

var _resolvers = _interopRequireDefault(require("./resolvers"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var server = new _graphqlYoga.GraphQLServer({
  typeDefs: "./schema.graphql",
  resolvers: _resolvers["default"]
});
server.start(function () {
  return console.log('Graphql Server Running');
});