'use strict';

const logger = require('../modules/logger');
const { hashPassword, generateToken } = require('../modules/auth');
const db = require("../models");
const configs = require('../configs/config');

const User = db.users;
const Op = db.Sequelize.Op;



const _signup = async (req, res) => {
    try {
        const newUser = req.body;
        const oldUser = await User.findOne({
            where: {
                [Op.or]: [
                    { username: newUser.username },
                    { email: newUser.email }
                ]

            },
            attributes: ['id']
        });
        if (oldUser) { // username already exists
            return res.json({ success: 0, message: 'Username or Email already exists.' });
        }

        const hashedPass = await hashPassword(newUser.password);
        // create new user
        await User.create({
            full_name: newUser.full_name,
            username: newUser.username,
            email: newUser.email,
            password: hashedPass
        });
        return res.json({ success: 1, message: 'Done' });
    } catch (err) {
        logger.log('error', err);
        res.json({success: 0, message: err.message}); // this might reveal sensitive server information in production. Probably handle error accordingly by code
    }
}


const _signin = async (req, res) => {
    try {
        const reqUser = req.body;
        const oldUser = await User.findOne({
            where: {
                username: reqUser.username
            }
        });
        if (!oldUser) { // username does not exist
            return res.json({ success: 0, message: 'Username/Password Incorrect.' });
        }
        console.log(reqUser.password)
        const isPasswordValid = await oldUser.validPassword(reqUser.password)
        if (!isPasswordValid) {
            return res.status(401).json({ success: 0, message: 'Username/Password Incorrect.' });
        }
        const user = oldUser.toJSON();
        const token = generateToken({ id: user.id, username: user.username, full_name: user.full_name, created_ts: user.created_ts }, configs.auth.web_token_secret_key, configs.auth.web_token_expire);
        return res.json({ success: 1, message: 'Done', data: { token: token } });
    } catch (err) {
        logger.log('error', err);
        res.json({success: 0, message: err.message}); // this might reveal sensitive server information in production. Probably handle error accordingly by code
    }
}

module.exports = {
    signup: _signup,
    signin: _signin
}