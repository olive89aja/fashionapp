var db = require("../models");

module.exports = function(app) {
  // Load index page/home
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });
  app.get("/browse", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("browse", {
        
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
  app.get("/closet", function(req, res) {
    res.sendFile(path.join(__dirname, "closet.html"))
  },

  app.get("/outfit", function(req, res) {
    res.sendFile(path.join(__dirname, "outfit.html"));
  },

  // clothes 
  app.get("/tops", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("tops", {
        example: dbExample
      });
    });
  }),

  app.get("/pants", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("pants", {
        example: dbExample
      });
    });
  }),

  app.get("/shoes", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("shoes", {
        example: dbExample
      });
    });
  }),

  app.get("/dresses", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("dresses", {
        example: dbExample
      });
    });
  }),

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  }),
}; 
