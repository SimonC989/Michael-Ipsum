const Sequelize = require('sequelize');
const { dbName, user, pass } = require('../config/db-config');

const db = new Sequelize(dbName, user, pass, {
  host: '127.0.0.1',
  dialect: 'postgres',
  logging: false,
  port: 5432,
});

db
  .authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err));

module.exports = db;
