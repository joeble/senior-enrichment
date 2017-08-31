'use strict';

// Require all the models
const Student = require('./student');
const Campus = require('./campus');

// association
Student.belongsTo(Campus);

module.exports = {Student, Campus};
