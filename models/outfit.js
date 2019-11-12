module.exports = function(sequelize, DataTypes) {
  var Outfit = sequelize.define("Outfit", {
    dresses: DataTypes.STRING,
    tops: DataTypes.STRING,
    pants: DataTypes.STRING,
    shoes: DataTypes.STRING
  });
  return Outfit;
};
