var db = require("../models");
var path = require("path");
module.exports = function(app) {
  // // LOAD HOME PAGE WITH HTML
  // app.get("/", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../testing html/test_home.html"));
  // });
  // LOAD HOME PAGE WITH HANDLEBARS
  app.get("/", function(req, res) {
    res.render("index");
  });

  // Load closet page where the outfits are made
  app.get("/closet", function(req, res) {
    db.Closet.findOne({ where: { id: req.params.id } }).then(function(
      dbCloset
    ) {
      res.render("closet", {
        closet: dbCloset
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/closet/:id", function(req, res) {
    db.Outfit.findOne({ where: { id: req.params.id } }).then(function(
      dbOutfit
    ) {
      res.render("outfit", {
        outfit: dbOutfit
      });
    });
  });

  // Load comment page and pass in an example by id
  app.get("/comments", function(req, res) {
    db.Comment.findOne({ where: { id: req.params.id } }).then(function(
      dbComment
    ) {
      res.render("comments", {
        comment: dbComment
      });
    });
  });

  // Load index page/home

  app.get("/browse", function(req, res) {
    db.outfitsDB.findAll({}).then(function() {
      res.render("browse");
    });
  });

  app.get("/closet", function(req, res) {
    res.render("closet", data);
  });

  app.get("/outfits", function(req, res) {
    res.render("outfits", data);
  });

  // Render 404 page
  app.get("*", function(req, res) {
    res.render("404");
  });
};
