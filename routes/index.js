var express = require("express");
var db = require("../models");
var router = express.Router();

app.get("/", function(req, res) {
  res.render("index");
});
