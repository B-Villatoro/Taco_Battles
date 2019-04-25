module.exports = function(sequelize, DataTypes) {
  let Taco = sequelize.define("taco", {
    taco_name: DataTypes.STRING,
    name_user: DataTypes.STRING,
    attack: DataTypes.INTEGER,
    health: DataTypes.INTEGER,
    wins: DataTypes.INTEGER,
    losses: DataTypes.INTEGER
  });
  return Taco;
};
