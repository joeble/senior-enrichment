'use strict'
const chalk = require('chalk');
const pkg = require('../package.json');
const db = require('./db');

const name = process.env.DATABASE_NAME || pkg.name;
const connectionString = process.env.DATABASE_connectionString || `postgres://localhost:5432/${pkg.name}`;

console.log(chalk.yellow(`Opening database connection to ${connectionString}`));

// run our models file (makes all associations for our Sequelize objects)
console.log('about to require models');
require('./models/index')

// sync the db, creating it if necessary
function sync(force = false, retries = 0, maxRetries = 5) {
  return db.sync({force})
  .then(() => console.log(`Synced models to db ${connectionString}`))
  .catch(fail => {
    // Don't do this auto-create nonsense in prod, or
    // if we've retried too many times.
    if (process.env.NODE_ENV === 'production' || retries > maxRetries) {
      console.error(chalk.red(`********** database error ***********`))
      console.error(chalk.red(`    Couldn't connect to ${connectionString}`))
      console.error()
      console.error(chalk.red(fail))
      console.error(chalk.red(`*************************************`))
      return
    }
    // Otherwise, do this autocreate nonsense
    console.log(`${retries ? `[retry ${retries}]` : ''} Creating database ${name}...`)
    return new Promise((resolve, reject) =>
      require('child_process').exec(`createdb "${name}"`, resolve)
    ).then(() => sync(true, retries + 1))
  })
}

db.didSync = sync();
