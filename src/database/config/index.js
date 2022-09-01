const Sequelize = require("sequelize");

require("dotenv").config();

const config = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_SCHEMA,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: "mysql",
};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

module.exports = sequelize;
