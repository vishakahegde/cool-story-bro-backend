'use strict';
module.exports = (sequelize, DataTypes) => {
  const homePage = sequelize.define('homePage', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    backgroundColor: DataTypes.STRING,
    color: DataTypes.STRING
  }, {});
  homePage.associate = function(models) {
    // associations can be defined here
  };
  return homePage;
};