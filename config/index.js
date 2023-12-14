const database = require('./database.config');

module.exports = {
  database,
  port: process.env.PORT || 3000,
};
