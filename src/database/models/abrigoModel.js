const { DataTypes } = require("sequelize");

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
      nomeAbrigo: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'nome_abrigo'
      },
      emailAbrigo: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'email_abrigo'
      },
      sobre: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      usuarioId: {
        type: DataTypes.INTEGER,
        field: 'usuarios_id'
      },
      enderecoId: {
        type: DataTypes.INTEGER,
        field: 'endereco_id'
      },
      sualogo: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      tableName: "abrigos",
      timestamps: false,
    }
  );


  abrigo.associate = (models) => {
    abrigo.belongsTo(models.usuarioModel, {
      as: 'usuario',
      foreignKey: 'usuarioId'
    });
    abrigo.hasMany(models.contato_abrigoModel, {
      as: 'contatos',
      foreignKey: 'abrigoId'
    });
    abrigo.hasMany(models.socialModel, {
      as: 'sociais',
      foreignKey: 'abrigoId'
    });
    abrigo.hasOne(models.enderecoModel, {
      as: 'endereco',
      foreignKey: 'enderecoId'
    })
};



  return abrigo;
};