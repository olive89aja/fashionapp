module.exports = function(sequelize, DataTypes) {
  var Dresses = sequelize.define("Dresses", {
    url: DataTypes.STRING
  });
  return Dresses;
};
