"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _db = require("./db");

var resolvers = {
  Query: {
    movies: function movies(_, _ref) {
      var limit = _ref.limit,
          rating = _ref.rating;
      return (0, _db.getMovies)(limit, rating);
    }
  }
};
var _default = resolvers;
exports["default"] = _default;