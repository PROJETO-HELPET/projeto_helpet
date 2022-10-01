const { DataTypes } = require("sequelize");1

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
        allowNull: true,
      },
      contato: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      abrigoId: {
        type: DataTypes.INTEGER,
        field: 'abrigo_id'
      },
    },
    {
      tableName: "contatos_abrigos",
      timestamps: false,
    }
  );
  
  contato_abrigo.associate = (models) => {
    contato_abrigo.belongsTo(models.abrigoModel, {
      as: 'abrigo',
      foreignKey: 'abrigoId'
    })};
 
  return contato_abrigo;
};
