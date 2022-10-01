'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('enderecos', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      cep: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      },
      cidade: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      rua: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      complemento: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
      },
      numero: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true,
      },
      bairro: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
      },
    })

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('enderecos');
  }
};
