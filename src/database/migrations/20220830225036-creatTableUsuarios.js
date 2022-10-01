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
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      celular: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      },
      fixo: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
      },
      senha: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },

    })

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('usuarios');
  }
};
