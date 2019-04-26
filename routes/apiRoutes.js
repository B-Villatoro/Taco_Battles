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
    db.Taco.create(req.body).then(function(dbTaco) {
      res.json(dbTaco);
    });
  });

  // Delete an Taco by id
  app.delete("/api/tacos/:id", function(req, res) {
    db.Taco.destroy({ where: { id: req.params.id } }).then(function(dbTaco) {
      res.json(dbTaco);
    });
  });
  
  //get all ingredients
  app.get("/api/ingredients", function(req, res) {
    db.taco.findAll({}).then(function(dbIngredients) {
      res.json(dbIngredients);
    });
  });
};
