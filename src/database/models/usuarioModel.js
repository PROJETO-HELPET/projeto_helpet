const { DataTypes } = require("sequelize");
const sequelize = require('../config')

module.exports = (sequelize) => {
  const usuario = sequelize.define(
    "Usuario",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome: {
        type: DataTypes.STRING,
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
      senha: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "usuarios",
      timestamps: false,
    }
  );

  usuario.associate = (models) => {
    usuario.hasMany(models.abrigoModel, {
      as: 'abrigos',
      foreignKey: 'usuarioId'
    });
  }

  
  return usuario;
};

