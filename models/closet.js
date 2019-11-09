"use strict";
module.exports = function(sequelize, DataTypes) {
  var Closet = sequelize.define("Closet", {
    tops: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dresses: {
      type: DataTypes.STRING,
      allowNull: false
    },
    shoes: {
      type: DataTypes.STRING,
      allowNull: false
    },
    foreignkey: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  return Closet;
};
