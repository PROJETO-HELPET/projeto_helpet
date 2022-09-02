'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('abrigos', {
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
      endereco_id: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'enderecos',
          },
          key: 'id'
        },
      },
      sobre: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      usuarios_id: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'usuarios',
          },
          key: 'id'
        },
      },
    })

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('abrigos');
  }
};
