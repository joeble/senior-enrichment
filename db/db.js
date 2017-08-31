const Sequelize = require('sequelize');
const pkg = require('../package.json');

// create the database instance that can be used in other database files
module.exports = new Sequelize(`postgres://localhost:5432/${pkg.name}`, {
  logging: false, // export DEBUG=sql in the environment to get SQL queries
  native: true    // lets Sequelize know we can use pg-native for ~30% more speed (if you have issues with pg-native feel free to take this out and work it back in later when we have time to help)
});
