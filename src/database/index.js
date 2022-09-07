const sequelize = require('./config');

const db = {
  usuarioModel: require('./models/usuarioModel')(sequelize),
  enderecoModel: require('./models/enderecoModel')(sequelize),
  abrigoModel: require('./models/abrigoModel')(sequelize),
  contato_abrigoModel: require('./models/contato_abrigoModel')(sequelize),
  socialModel: require('./models/socialModel')(sequelize),
}

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;