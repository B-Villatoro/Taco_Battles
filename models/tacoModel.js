module.exports = function(sequelize, DataTypes) {
  let taco = sequelize.define("taco", {
    taco_name: DataTypes.STRING,
    name_user: DataTypes.STRING,
    attack: DataTypes.INTEGER,
    health: DataTypes.INTEGER,
    wins: DataTypes.INTEGER,
    losses: DataTypes.INTEGER
  });


  taco.associate = function(models) {
    taco.belongsTo(models.user, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return taco;
};
