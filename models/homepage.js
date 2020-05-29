"use strict";
module.exports = (sequelize, DataTypes) => {
  const homePage = sequelize.define(
    "homePage",
    {
      title: { type: DataTypes.STRING, allowNull: false },
      description: DataTypes.TEXT,
      backgroundColor: DataTypes.STRING,
      color: DataTypes.STRING,
    },
    {}
  );
  homePage.associate = function (models) {
    homePage.belongsTo(models.user);
    homePage.hasMany(models.story);
  };
  return homePage;
};
