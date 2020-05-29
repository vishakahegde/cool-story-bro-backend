"use strict";
module.exports = (sequelize, DataTypes) => {
  const homePage = sequelize.define(
    "homePage",
    {
      title: { type: DataTypes.STRING, allowNull: false },
      description: DataTypes.TEXT,
      backgroundColor: {
        type: DataTypes.STRING,
        defaultValue: "#ffffff",
      },
      color: {
        type: DataTypes.STRING,
        defaultValue: "#000000",
      },
    },
    {}
  );
  homePage.associate = function (models) {
    homePage.belongsTo(models.user);
    homePage.hasMany(models.story);
  };
  return homePage;
};
