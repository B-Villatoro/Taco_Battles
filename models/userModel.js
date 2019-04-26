module.exports = function(sequelize, DataTypes) {
    let user = sequelize.define("user", {
      name_user: DataTypes.STRING,
      taco_count: DataTypes.INTEGER,
      rating: DataTypes.INTEGER
    });
  
  
    user.associate = function(models) {
      user.hasMany(models.taco, {
        onDelete: "cascade",
      });
    };
    return user;
  };

  