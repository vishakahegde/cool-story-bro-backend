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
          homePageId: 1,
        },
        {
          name: "Newbie Programmer",
          content: "This story is about newbie programming struggles",
          imageUrl:
            "https://www.c-sharpcorner.com/UploadFile/BlogImages/05012018131717PM/4.png",
          createdAt: new Date(),
          updatedAt: new Date(),
          homePageId: 1,
        },
        {
          name: "I scream Ice Cream",
          content: "I scream you scream we all scream for Ice Cream",
          imageUrl:
            "https://cdn.britannica.com/s:700x500/50/80550-050-5D392AC7/Scoops-kinds-ice-cream.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          homePageId: 2,
        },
        {
          name: "Puppies are the cutest",
          content: "There's no man alive that can resist puppy eyes",
          imageUrl:
            "http://www.funnypuppysite.com/pictures/Cute_Puppy_Eyes60.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          homePageId: 2,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("stories", null, {});
  },
};
