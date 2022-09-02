'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('contatos_abrigos', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      tipo: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      valor: {
        type: Sequelize.DataTypes.BIGINT,
        allowNull: false,
      },
      usuarios_id: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'abrigos',
          },
          key: 'id'
        },
      },
    })

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('contatos_abrigos');
  }
};
