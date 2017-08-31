'use strict'
const router = require('express').Router();

// Testing our send
router.get('/hello', (req, res) => res.send({hello: '안녕'}))

router.use('/students', require('./students'));
router.use('/campuses', require('./campuses'));

module.exports = router;
