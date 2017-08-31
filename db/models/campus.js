'use strict';

const Sequelize = require('sequelize');
const db = require('../db.js');

const Campus = db.define('campus', {
  name: Sequelize.STRING,
  imgURL: Sequelize.STRING
})

module.exports = Campus;
