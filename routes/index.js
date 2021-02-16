'use strict';

const express = require('express');

const router = express.Router();

router.use('/api/user', require('./user'));
router.use('/api/category', require('./category'));
router.use('/api/author', require('./author'));
router.use('/api/book', require('./book'));

module.exports = router;
