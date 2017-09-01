'use strict';

const Sequelize = require('sequelize');
const db = require('../db.js');

const Student = db.define('student', {
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  campusId: Sequelize.INTEGER
})

module.exports = Student;
