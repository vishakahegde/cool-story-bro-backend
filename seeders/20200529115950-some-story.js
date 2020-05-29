"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "stories",
      [
        {
          name: "Chilly Philly",
          content: "This story is about how Philly became chilly",
          imageUrl:
            "https://www.inquirer.com/resizer/pUXDFDtjvtQgBhcd4i5wHnKm4h0=/1400x932/smart/arc-anglerfish-arc2-prod-pmn.s3.amazonaws.com/public/3AXPGWV22ZFGTONLDKLHV3YPWY.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Newbie Programmer",
          content: "This story is about newbie programming struggles",
          imageUrl:
            "https://www.c-sharpcorner.com/UploadFile/BlogImages/05012018131717PM/4.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("stories", null, {});
  },
};
