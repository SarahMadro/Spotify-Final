'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'ChatMessages', // name of Source model
      'ChatId', // name of the key we're adding 
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Chats', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    )
    .then (() => {return queryInterface.addColumn(
      'Chats', // name of Source model
      'RoomId', // name of the key we're adding 
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Rooms', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',})
    })
    .then (() => {return queryInterface.addColumn(
      'Songs', // name of Source model
      'RoomId', // name of the key we're adding 
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Rooms', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',})
  });

  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'ChatMessages', // name of Source model
      'ChatId' // key we want to remove
    ).then (() => {return queryInterface.removeColumn(
      'Chats', // name of Source model
      'RoomId' // key we want to remove
      )
    }).then (() => {return queryInterface.removeColumn(
      'Songs', // name of Source model
      'RoomId' // key we want to remove
      )
    })
  }
}