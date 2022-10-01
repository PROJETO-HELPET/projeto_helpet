const { DataTypes } = require("sequelize");


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
      facebook: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      instagram: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      abrigoId: {
        type: DataTypes.INTEGER,
        field: 'abrigo_id'
      },
    },
    {
      tableName: "sociais",
      timestamps: false,
    }
  );

  social.associate = (models) => {
    social.belongsTo(models.abrigoModel, {
      as: 'abrigo',
      foreignKey: 'abrigoId'
    })};
 
  return social;
};

