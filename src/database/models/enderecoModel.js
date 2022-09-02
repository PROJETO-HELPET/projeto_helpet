const { DataTypes } = require("sequelize");
const sequelize = require('../config')

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
      CEP: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rua: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      complemento: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      numero: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      /* tabela ligada a abrigos  */
    },
    {
      tableName: "enderecos",
      timestamps: false,
    }
  );

  endereco.belongsTo(abrigo, {
    as: 'abrigo',
    foreningKey: 'endereco_id',
  })

  return endereco;
};
