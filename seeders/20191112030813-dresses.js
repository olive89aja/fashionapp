"use strict";
const dresses = require("../clothesJSON/dresses.json");

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
    const allDresses = populate(dresses);

    return queryInterface.bulkInsert("dresses", allDresses, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("dresses", null, {});
  }
};
