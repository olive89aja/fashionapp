"use strict";
const shoes = require("../clothesJSON/shoes.json");

function populate(json) {
  const arr = [];

  for (var i = 0; i < json.length; i++) {
    const results = json[i].link;
    console.log(results);
    arr.push({
      url: results,
      createdAt: new Date(),
      updatedAt: new Date()
    });
  }

  return arr;
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    const allShoes = populate(shoes);

    return queryInterface.bulkInsert("shoes", allShoes, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("shoes", null, {});
  }
};
