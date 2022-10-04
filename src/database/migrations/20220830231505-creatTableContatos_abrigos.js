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
        allowNull:true,
      },
      contato: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true,
      },
      abrigo_id: {
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
