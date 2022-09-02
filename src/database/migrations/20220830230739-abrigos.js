'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('abrigos', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      endereco_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'enderecos',
          },
          key: 'id'
        },
      },
      sobre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      usuarios_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
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
