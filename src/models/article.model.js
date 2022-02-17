"use strict";
var dbConn = require("./../../config/db.config");
//Article object create
var Article = function (article) {
  this.title = article.title;
  this.text = article.text;
  this.keywords = article.keywords;
  this.createdDate = article.createdDate;
};
Article.findById = function (id, result) {
  dbConn.query(
    "Select * from articles where id = ? ",
    id,
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};
Article.findAll = function (result) {
  dbConn.query("Select * from articles", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("articles : ", res);
      result(null, res);
    }
  });
};
module.exports = Article;