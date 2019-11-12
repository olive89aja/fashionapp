var db = require("../models");
// var Tops = require("../models/Tops");
module.exports = function(app) {
  // LOAD HOME PAGE WITH HANDLEBARS
  app.get("/", function(req, res) {
    res.render("index");
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

  // Load browse page/

  // app.get("/browse", function(req, res) {
  //   db.Tops.findAll({
  //     include: [
  //       {
  //         model: db.Pants
  //       }
  //     ]
  //   }).then(function(AllData) {
  //     res.render("browse", AllData);
  //   });
  // });
  app.get("/browse/all", function(req, res) {
    db.Tops.findAll({}).then(function(Tops) {
      db.Pants.findAll({}).then(function(Pants) {
        db.Dresses.findAll({}).then(function(Dresses) {
          db.Shoes.findAll({}).then(function(Shoes) {
            res.render("browse", {
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
  // app.get("/buildt", function(req, res) {
  //   db.Tops.findAll({}).then(function(data) {
  //     res.render("buildt", { Tops: data });
  //   });
  // });
  // app.get("/buildt", function(req, res) {
  //   db.Pants.findAll({}).then(function(data) {
  //     res.render("buildt", { Pants: data });
  //   });
  // });
  app.get("/buildt", function(req, res) {
    db.Dresses.findAll({}).then(function(data) {
      res.render("buildt", { Dresses: data });
    });
  });
  app.get("/buildt", function(req, res) {
    db.Shoes.findAll({}).then(function(data) {
      res.render("buildt", { Shoes: data });
    });
  });

  // app.get("/closet", function(req, res) {
  //   res.render("closet", data);
  // });

  app.get("/closet", function(req, res) {
    db.Outfit.findAll({}).then(function(data) {
      res.render("closet");
    });
  });

  // Render 404 page
  app.get("*", function(req, res) {
    res.render("404");
  });
};
