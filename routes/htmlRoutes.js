var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(
  //     dbExample
  //   ) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  app.get("/browse", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("browse", {
        example: dbExample
      });
    });
  });
  // app.get("/browse", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/browse.html"));
  // },
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
