var db = require("../models");

module.exports = function(app) {
  // Load index page/home
  app.get("/", function(req, res) {
    console.log('db.Outfit.findAll');
    db.Outfit.findAll({}).then(function(dbOutfits) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbOutfits
      });
    }).catch((error) => console.error(error));
  });

  // Loads all clothes on browse page
  app.get("/browse", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });
  //loads saved clothing items
  app.get("/closet", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });
  //loads saved outfits
  app.get("/outfit", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
