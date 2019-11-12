var db = require("../models");
var pants = require("../clothesJSON/pants.json");
var tops = require("../clothesJSON/tops.json");
var dresses = require("../clothesJSON/dresses.json");
var shoes = require("../clothesJSON/shoes.json");

module.exports = function(app) {
  app.get("/api/tops", function(req, res) {
    db.Tops.findAll({}).then(function(dbTops) {
      res.json(dbTops);
    });
    db.Pants.findAll({}).then(function(dbPants) {
      res.json(dbPants);
    });
  });
  app.get("/api/pants", function(req, res) {
    db.Pants.findAll({}).then(function(dbPants) {
      res.json(dbPants);
    });
  });
  app.get("/api/dresses", function(req, res) {
    db.Dresses.findAll({}).then(function(dbDresses) {
      res.json(dbDresses);
    });
  });
  app.get("/api/shoes", function(req, res) {
    db.Shoes.findAll({}).then(function(dbShoes) {
      res.json(dbShoes);
    });
  });

  //Create new outfit
  app.post("/api/closet", function(req, res) {
    db.Outfit.create(req.body).then(function(dbOutfits) {
      res.json(dbOutfits);
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
};
