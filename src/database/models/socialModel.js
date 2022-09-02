const { DataTypes } = require("sequelize");
const sequelize = require('../config')

module.exports = (sequelize) => {
  const social = sequelize.define(
    "social",
    {
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
    },
    {
      tableName: "sociais",
      timestamps: false,
    }
  );

  social.belongsTo(abrigo, {
    as: 'abrigo',
    foreningKey: 'abrigo_id',
  })

  return social;
};

