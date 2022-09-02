'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('enderecos', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      cep: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rua: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      complemento: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      numero: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    })

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('enderecos');
  }
};
