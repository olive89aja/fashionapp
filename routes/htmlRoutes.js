var db = require("../models");

module.exports = function(app) {
  // Load index page/home
  app.get("/index", function(req, res) {
    res.render("index", data )
  });

  app.get("/browse", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("browse", {
        example: dbExample
      });
        
  //loads saved clothing items
  // app.get("/closet", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(
  //     dbExample
  //   ) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });
  app.get("/closet", function(req, res) {
    res.render("closet", data )
    },

  app.get("/outfit", function(req, res) {
    res.render("outfit", data)
  },

  // // clothes 
  // app.get("/tops", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(
  //     dbExample
  //   ) {
  //     res.render("tops", {
  //       example: dbExample
  //     });
  //   });
  // }),

  // app.get("/pants", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(
  //     dbExample
  //   ) {
  //     res.render("pants", {
  //       example: dbExample
  //     });
  //   });
  // }),

  // app.get("/shoes", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(
  //     dbExample
  //   ) {
  //     res.render("shoes", {
  //       example: dbExample
  //     });
  //   });
  // }),

  // app.get("/dresses", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(
  //     dbExample
  //   ) {
  //     res.render("dresses", {
  //       example: dbExample
  //     });
  //   });
  // }),

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  }),
}; 
