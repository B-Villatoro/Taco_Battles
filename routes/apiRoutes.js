var db = require("../models");

module.exports = function(app) {
  // Get all Tacos
  app.get("/api/tacos", function(req, res) {
    db.taco.findAll({}).then(function(dbTacos) {
      res.json(dbTacos);
    });
  });

  // Create a new Taco
  app.post("/api/tacos", function(req, res) {
    db.taco.create(req.body).then(function(dbTaco) {
      res.json(dbTaco);
    });
  });

  // Delete an Taco by id
  app.delete("/api/tacos/:id", function(req, res) {
    db.taco.destroy({ where: { id: req.params.id } }).then(function(dbTaco) {
      res.json(dbTaco);
    });
  });
  
  //get all ingredients
  app.get("/api/ingredients", function(req, res) {
    db.ingredient.findAll({}).then(function(dbIngredients) {
      res.json(dbIngredients);
    });
  });

  app.get("/api/users", function(req, res) {
    db.user.findAll({}).then(function(dbUser) {
      res.json(dbUser);
    });
  });
};
