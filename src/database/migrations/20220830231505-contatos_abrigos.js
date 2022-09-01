'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('contatos_abrigos', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      tipo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      valor: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      usuarios_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
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
    // return queryInterface.sequelize.query(`
    //   DROP TABLE contatos_abrigos
    // `);
    return queryInterface.dropTable('contatos_abrigos');
  }
};
