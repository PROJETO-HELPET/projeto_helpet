const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const endereco = sequelize.define(
    "endereco",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      cep: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      cidade: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rua: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      complemento: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      numero: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      bairro: {
        type: DataTypes.STRING,
        allowNull: true,
      }

      
    },
    {
      tableName: "enderecos",
      timestamps: false,
    }
  );

 
  return endereco;
};
