"use strict";
const pants = require("../clothesJSON/pants.json");

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
    const allPants = populate(pants);

    return queryInterface.bulkInsert("pants", allPants, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("pants", null, {});
  }
};
