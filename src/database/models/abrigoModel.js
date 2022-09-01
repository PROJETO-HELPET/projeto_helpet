const { DataTypes } = require("sequelize");
const sequelize = require('../config')

module.exports = (sequelize) => {
  const abrigo = sequelize.define(
    "abrigo",
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
      sobre: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      foto: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      usuarioId:{
        type: DataTypes.INTEGER,
        field: usuarios_id
      },
    },
    {
      tableName: "abrigos",
      timestamps: false,
    }
  );

  abrigo.hasMany(usuario, {
    as: 'usuarios',
    foreningKey: 'usuarios_id',
  })
  
  return abrigo;
};