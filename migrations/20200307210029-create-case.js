'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Cases', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      digiCode: {
        type: Sequelize.INTEGER
      },
      victim_name: {
        type: Sequelize.STRING
      },
      victim_age: {
        type: Sequelize.INTEGER
      },
      victim_ethnic: {
        type: Sequelize.STRING
      },
      incident_location: {
        type: Sequelize.STRING
      },
      charges: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      detained: {
        type: Sequelize.BOOLEAN
      },
      cops_present: {
        type: Sequelize.INTEGER
      },
      photo_url: {
        type: Sequelize.STRING
      },
      officer_name: {
        type: Sequelize.STRING
      },
      officer_age: {
        type: Sequelize.INTEGER
      },
      officer_ethnic: {
        type: Sequelize.STRING
      },
      officer_nature: {
        type: Sequelize.TEXT
      },
      miranda_rights: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Cases');
  }
};