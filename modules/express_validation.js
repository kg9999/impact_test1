'use strict';

const { body, check, validationResult } = require('express-validator');


exports.categoryValidation = [
    body('name')
        .not().isEmpty(),
    body('description')
        .not().isEmpty(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        next();
    }
];

exports.AuthorValidation = [
    body('first_name')
        .not().isEmpty(),
    body('last_name')
        .not().isEmpty(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ success: 0, message: errors.mapped() });
        }
        next();
    }
];

exports.bookValidation = [
    body('name')
        .not().isEmpty(),
    body('isbn_number')
        .not().isEmpty(),
    body('year_published')
        .not().isEmpty(),
    body('authors')
        .isArray(),
    body('categories')
        .isArray(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ success: 0, message: errors.mapped() });
        }
        next();
    }
];

exports.signupValidation = [
    body('username')
        .not().isEmpty(),
    body('password')
        .not().isEmpty(),
    body('full_name')
        .not().isEmpty(),
    body('email')
        .isEmail(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ success: 0, message: errors.mapped() });
        }
        next();
    }
];

exports.signinValidation = [
    body('username')
        .not().isEmpty(),
    body('password')
        .not().isEmpty(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ success: 0, message: errors.mapped() });
        }
        next();
    }
];