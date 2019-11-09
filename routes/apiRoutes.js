var db = require("../models");
var pants = require("../pants.json");

module.exports = function(app) {
  // Get all queries for outfits
  app.get("/api/all", function(req, res) {
    db.Outfit.findAll({}).then(function(dbOutfits) {
      res.json(dbOutfits);
    });
  });

  //Create new outfit
  app.post("api/closet", function(req, res) {
    db.Outfit.create({
      outfits: req.body.outfits,
      foreignkey: req.body.id
    }).then(function(dbOutfits) {
      res.json(dbOutfits);
    });
  });

  // Create a new comment
  app.post("/api/comments", function(req, res) {
    console.log("Someone made a comment! Look: ");
    console.log(req.body.comment);
    db.Comment.create({
      anon: req.body.anon,
      comment: req.body.comment,
      foreignkey: req.body.id
    }).then(function(dbComment) {
      res.json(dbComment);
    });
  });

  // Delete a comment by id
  app.delete("/api/comments/:id", function(req, res) {
    db.Comment.destroy({ where: { id: req.params.id } }).then(function(
      dbComment
    ) {
      res.json(dbComment);
    });
    //only loads bottoms:pants, skirts, shorts on browse page
    app.get("/bottoms", function(req, res) {
      db.outfitsDB
        .findOne({ where: { id: req.params.id } })
        .then(function(outfitsDB) {
          res.render("bottoms", {
            example: dbExample
          });
        });
    });
    //tops
    app.get("tops", function(req, res) {
      db.outfitsDB
        .findOne({ where: { id: req.params.id } })
        .then(function(outfitsDB) {
          res.render("example", {
            example: dbExample
          });
        });
    });
    //only loads dresses on browse page
    app.get("/dresses", function(req, res) {
      db.outfitsDB
        .findOne({ where: { id: req.params.id } })
        .then(function(outfitsDB) {
          res.render("example", {
            example: dbExample
          });
        });
    });
    //only loads shoes on browse page
    app.get("/shoes", function(req, res) {
      db.outfitsDB
        .findOne({ where: { id: req.params.id } })
        .then(function(outfitsDB) {
          res.render("example", {
            example: dbExample
          });
        });
    });

    // Create a new example
    app.post("outfitsDB", function(req, res) {
      db.outfitsDB.create(req.body).then(function(dbExample) {
        res.json(pants.json);
      });
    });

    app.get("/", function(req, res) {
      // db.outfitsDB.create(req.body).then(function() {

      var pantsArr = [];
      for (var i = 0; i < pants.length; i++) {
        var results = pants[i].link;
        pantsArr.push(results);
      }
      // results.push(pantsArr);

      res.json(pantsArr);
    });
  });
};
