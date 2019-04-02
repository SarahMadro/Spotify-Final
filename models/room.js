'use strict';
module.exports = (sequelize, DataTypes) => {
  const Room = sequelize.define('Room', {
    public: DataTypes.BOOLEAN,
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    shareLink: DataTypes.STRING
  }, {});
  Room.associate = function(models) {
    Room.hasMany(models.Songs);
    Room.hasOne(models.Chats);
  };
  return Room;
};