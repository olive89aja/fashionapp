var db = require("../models");
// var Tops = require("../models/Tops");
module.exports = function(app) {
  // LOAD HOME PAGE WITH HANDLEBARS
  app.get("/", function(req, res) {
    res.render("index");
  });
  app.get("/about", function(req, res) {
    res.render("about");
  });

  // Load build It page/
  app.get("/browse/all", function(req, res) {
    db.Tops.findAll({}).then(function(Tops) {
      db.Pants.findAll({}).then(function(Pants) {
        db.Dresses.findAll({}).then(function(Dresses) {
          db.Shoes.findAll({}).then(function(Shoes) {
            res.render("buildt", {
              Tops,
              Pants,
              Dresses,
              Shoes
            });
          });
        });
      });
    });
  });

  app.get("/browse/tops", function(req, res) {
    db.Tops.findAll({}).then(function(data) {
      res.render("browse", { Tops: data });
    });
  });
  app.get("/browse/bottoms", function(req, res) {
    db.Pants.findAll({}).then(function(data) {
      res.render("browse", { Pants: data });
    });
  });
  app.get("/browse/dresses", function(req, res) {
    db.Dresses.findAll({}).then(function(data) {
      res.render("browse", { Dresses: data });
    });
  });
  app.get("/browse/shoes", function(req, res) {
    db.Shoes.findAll({}).then(function(data) {
      res.render("browse", { Shoes: data });
    });
  });
  //Closet/Outfit Page
  app.get("/closet", function(req, res) {
    db.Outfit.findAll({}).then(function(data) {
      res.render("closet", { outfit: data });
    });
  });

  // Render 404 page
  app.get("*", function(req, res) {
    res.render("404");
  });
};
