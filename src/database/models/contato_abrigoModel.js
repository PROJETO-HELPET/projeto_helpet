const { DataTypes } = require("sequelize");
const sequelize = require('../config')

module.exports = (sequelize) => {
  const contato_abrigo = sequelize.define(
    "contato_abrigo",
    {
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
      contato: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "contatos_abrigos",
      timestamps: false,
    }
  );
  
 
  return contato_abrigo;
};
