'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // return queryInterface.sequelize.query(`
    //   CREATE TABLE livros (
    //     id INT primary key auto_increment,
    //     titulo VARCHAR(50) NOT NULL,
    //     quantidade_paginas INT NOT NULL,
    //     autor VARCHAR(50) NOT NULL,
    //     ano_lancamento VARCHAR(50) NOT NULL,
    //     estoque INT NOT NULL
    //   );
    // `);
    return queryInterface.createTable('usuarios', {
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
      sobrenome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      celular: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fixo: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    })

  },

  down: (queryInterface, Sequelize) => {
    // return queryInterface.sequelize.query(`
    //   DROP TABLE usuarios
    // `);
    return queryInterface.dropTable('usuarios');
  }
};
