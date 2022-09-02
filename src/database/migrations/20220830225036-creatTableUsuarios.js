'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
 
    return queryInterface.createTable('usuarios', {
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
      sobrenome: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      email: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
      },
      celular: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      fixo: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
      },
    })

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('usuarios');
  }
};
