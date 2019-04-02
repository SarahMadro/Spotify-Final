'use strict';
module.exports = (sequelize, DataTypes) => {
  const Chats = sequelize.define('Chats', {
    name: DataTypes.STRING
  }, {});
  Chats.associate = function(models) {
    Chats.hasMany(models.ChatMessages);
    Chats.belongsTo(models.Room);
  };
  return Chats;
};