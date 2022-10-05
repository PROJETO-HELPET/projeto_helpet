const { DataTypes } = require("sequelize");


module.exports = (sequelize) => {
  const usuario = sequelize.define(
    "usuario",
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
        type: DataTypes.STRING,
        allowNull: false,
      },
      celular: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      fixo: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      senha: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      suafoto: {
        type: DataTypes.STRING,
        allowNull: true,
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

