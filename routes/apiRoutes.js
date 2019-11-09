var db = require("../models");
var pants = require("../pants.json");
var tops = require("../tops.json");
var dresses = require("../dresses.json");
var shoes = require("../shoes.json");

module.exports = function(app) {
  //only loads bottoms:pants, skirts, shorts on browse page
  app.get("/bottoms", function(req, res) {
    db.outfitsDB
      .findOne({ where: { id: req.params.id } })
      .then(function(outfitsDB) {
        res.render("example", {
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
  //POST TOPS TO TOPS TABLE
  app.post("/api/tops", function(req, res) {
    var topsArr = [];
    for (var i = 0; i < tops.length; i++) {
      var results = tops[i].link;
      topsArr.push(results);
    }
    topsArr.forEach(function(top) {
      db.Tops.create({
        url: top
      });
    });
  });
  //POST BOTTOMS TO PANTS TABLE
  app.post("/api/bottoms", function(req, res) {
    var pantsArr = [];
    for (var i = 0; i < pants.length; i++) {
      var results = pants[i].link;
      pantsArr.push(results);
    }
    pantsArr.forEach(function(pant) {
      db.Pants.create({
        url: pant
      });
    });
  });
  //POST DRESSES TO DRESSES TABLE
  app.post("/api/dresses", function(req, res) {
    var dressesArr = [];
    for (var i = 0; i < dresses.length; i++) {
      var results = dresses[i].link;
      dressesArr.push(results);
    }
    dressesArr.forEach(function(dress) {
      db.Dresses.create({
        url: dress
      });
    });
  });
  //POST SHOES TO SHOES TABLE
  app.post("/api/shoes", function(req, res) {
    var shoesArr = [];
    for (var i = 0; i < shoes.length; i++) {
      var results = shoes[i].link;
      shoesArr.push(results);
    }
    shoesArr.forEach(function(shoe) {
      db.Shoes.create({
        url: shoe
      });
    });
  });
  // });
  // app.post("outfitsDB", function(req, res) {
  //   db.outfitsDB.create(req.body).then(function(dbOutfits) {
  //     res.json(pants.json);
  //   });
  // });
};
