const express = require("express");
const router = express.Router();
const articleController = require("../controllers/article.controller");
// Retrieve all articles
router.get("/", articleController.findAll);
// Retrieve a single article with id
router.get("/:id", articleController.findById);
module.exports = router;
