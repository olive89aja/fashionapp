var db = require("../models");
var Tops = require("../models/Tops");
module.exports = function(app) {
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
    db.Tops.findAll({}).then(function(dataValues) {
      // res.json(dbTops);
      res.render("browse", { Tops: dataValues });
      console.log( Tops{dataValues:url} );
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
