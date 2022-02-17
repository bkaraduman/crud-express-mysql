"use strict";
const Article = require("../models/article.model");
exports.findAll = function (req, res) {
  console.log(req);
  Article.findAll(function (err, article) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", article);
    res.send(article);
  });
};
exports.findById = function (req, res) {
  Article.findById(req.params.id, function (err, article) {
    if (err) res.send(err);
    res.json(article);
  });
};