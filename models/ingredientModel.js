module.exports = function(sequelize, DataTypes) {
    let ingredient = sequelize.define("ingredient", {
      ingred_name: DataTypes.STRING,
      attack: DataTypes.INTEGER,
      health: DataTypes.INTEGER,
    });
    return ingredient;
  };
  
