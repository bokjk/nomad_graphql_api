"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMovies = void 0;

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var API_URL = "https://yts.am/api/v2/list_movies.json?";

var getMovies = function getMovies(limit, rating) {
  var REQUEST_URL = API_URL;

  if (limit > 0) {
    REQUEST_URL += "limit=".concat(limit);
  }

  if (rating > 0) {
    REQUEST_URL += "&minimum_rating=".concat(rating);
  }

  return (0, _nodeFetch["default"])(REQUEST_URL).then(function (res) {
    return res.json();
  }).then(function (json) {
    return json.data.movies;
  });
};

exports.getMovies = getMovies;