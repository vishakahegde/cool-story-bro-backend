"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "homePages",
      [
        {
          title: "Born & Raised in Philly",
          description: "How I became the prince of Bel Air",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },
        {
          title: "How I became a programmer",
          description: "How I learnt to stop worrying and love the typos",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("homePages", null, {});
  },
};
