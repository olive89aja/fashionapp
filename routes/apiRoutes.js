var db = require("../models");

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
  });
};
