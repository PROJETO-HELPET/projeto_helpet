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
      valor: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "contatos_abrigos",
      timestamps: false,
    }
  );
  
  contato_abrigo.belongsTo(abrigo, {
    as: 'abrigo',
    foreningKey: 'abrigo_id',
  })

  return contato_abrigo;
};
