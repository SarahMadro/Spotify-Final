'use strict';
module.exports = (sequelize, DataTypes) => {
  const ChatMessages = sequelize.define('ChatMessages', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    message: DataTypes.STRING
  }, {});
  ChatMessages.associate = function(models) {
    ChatMessages.belongsTo(models.Chat)
  };
  return ChatMessages;
};