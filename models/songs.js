'use strict';
module.exports = (sequelize, DataTypes) => {
  const Songs = sequelize.define('Songs', {
    songName: DataTypes.STRING,
    songArtist: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    uri: DataTypes.STRING,
    image: DataTypes.STRING,
    addedByUser: DataTypes.INTEGER
  }, {});
  Songs.associate = function(models) {
    Songs.belongsTo(models.Room);
  };
  return Songs;
};