'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const {getCurrentTime} = require('../modules/utils');
const { signup, signin } = require('../controllers/user');

const {signupValidation, signinValidation} = require('../modules/express_validation');

const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded({ extended: true });
const router = express.Router();

router.post('/signup', jsonParser, urlEncodedParser, signupValidation, (req, res) => {
    signup(req, res);
});

router.post('/signin', jsonParser, urlEncodedParser, signinValidation, (req, res) => {
    signin(req, res);
});

module.exports = router;
