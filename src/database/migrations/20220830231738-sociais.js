'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('sociais', {
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
      link: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      abrigos_id: {
        allowNull: false,
        type: DataTypes.str,
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
    //   DROP TABLE sociais
    // `);
    return queryInterface.dropTable('sociais');
  }
};
