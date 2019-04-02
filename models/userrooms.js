'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserRooms = sequelize.define('UserRooms', {
    id: DataTypes.INTEGER
  }, {});
  UserRooms.associate = function(models) {
    UserRooms.hasMany(models.Users);
  };
  return UserRooms;
};