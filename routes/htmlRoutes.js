var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Taco.findAll({}).then(function(dbTacos) {
      res.render("index", {
        msg: "Welcome!",
        Tacos: dbTacos
      });
    });
  });

  // Load Taco page and pass in an Taco by id
  app.get("/Taco/:id", function(req, res) {
    db.Taco.findOne({ where: { id: req.params.id } }).then(function(dbTaco) {
      res.render("Taco", {
        Taco: dbTaco
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
