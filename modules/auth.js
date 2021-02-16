'use strict'

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const configs = require('../configs/config');
const logger = require('./logger');

let configDefinedSaltRounds = process.env.saltRounds || 10;

const setSaltRounds = (saltRounds) => {
    saltRounds = _saltRounds;
}
const hashPassword = async (password, saltRounds = configDefinedSaltRounds) => {
    return await bcrypt.hash(password, saltRounds);
}

const compare = async (password, hashedPassword) => {
    console.log(password, hashedPassword);
    return await bcrypt.compare(password, hashedPassword);
}

const generateToken = (obj, secretKey, expire) => {
    console.log(secretKey)
    return jwt.sign(obj, secretKey, {expiresIn: expire});
}

const verify = (req, res, next) => {
    try {
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
        if (!token) {
            logger.log('error', {message: `${typeof req.headers.authorization} passed as header.`});
            return res.status(400).json({success: 0, message: 'User not allowed'});
        }
        jwt.verify(token , configs.auth.web_token_secret_key, (err, verify) => {
            if (err) {
                logger.debug(err.message);
                logger.log('error', err);
                return res.status(400).json({success: 0, message: 'User not allowed'});
            }
            req.user = verify;
            next();
        });
    } catch (err) {
        logger.log('error', err);
        return res.status(500).json({success: 0, message: 'Server Error.'});
    }
}

module.exports = {
    hashPassword: hashPassword,
    compare: compare,
    generateToken: generateToken,
    verify: verify,
    setSaltRounds: setSaltRounds
}