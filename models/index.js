const { Sequelize } = require('sequelize');
const { database } = require('../config');
const userSchema = require('./user');

const sequelize = new Sequelize({
  dialect: database.dialect,
  storage: database.databaseName,
});

const UserModel = sequelize.define('User', userSchema);

function initDB() {
  sequelize.sync()
  .then(() => {
    console.log('Database and tables synced');
  })
  .catch((err) => {
    console.error('Error syncing database:', err);
  });
}

module.exports = {
  initDB,
  UserModel,
};
