'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('sociais', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      link: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      abrigos_id: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'abrigos',
          },
          key: 'id'
        },
        allowNull: false
      },
    })

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('sociais');
  }
};
