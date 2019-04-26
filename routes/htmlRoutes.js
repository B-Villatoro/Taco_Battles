let db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    // db.taco.findAll({}).then(function(dbTacos) {
      res.render("index", {
        // msg: "Hello",
        // Tacos: dbTacos
      });
    // });
  });

  // Load Taco page and pass in an Taco by id
  app.get("/taco/:id", function(req, res) {
    db.taco.findOne({ where: { id: req.params.id } }).then(function(dbTaco) {
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
