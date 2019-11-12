"use strict";
const tops = require("../clothesJSON/tops.json");

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
    const allTops = populate(tops);

    return queryInterface.bulkInsert("tops", allTops, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("tops", null, {});
  }
};
