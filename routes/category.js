'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const {verify} = require('../modules/auth');
const { addCategory, deleteCategory, updateCategory, getCategories, getCategoryById } = require('../controllers/category');
const {insertApiLogs} = require('../modules/utils');
const {categoryValidation} = require('../modules/express_validation');

const db = require("../models");
const UserLogsModel = db.user_logs;

const router = express.Router();

const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded({ extended: true });


const API = '/api/book';
// insert a new category with fields: name, description
router.post('/', verify, jsonParser, urlEncodedParser, categoryValidation, (req, res) => {
    addCategory(req, res);
    insertApiLogs(UserLogsModel, req.user, API);
});

// DELETE - delete a category only if not linked to a book
router.delete('/:id', verify, jsonParser, urlEncodedParser, (req, res) => {
    deleteCategory(req, res);
    insertApiLogs(UserLogsModel, req.user, API);
});

// update a category
router.put('/:id', verify, jsonParser, urlEncodedParser, categoryValidation, (req, res) => {
    updateCategory(req, res);
    insertApiLogs(UserLogsModel, req.user, API);
});

// retrieve categories allowing filtering and paging
router.get('/', verify, jsonParser, urlEncodedParser, (req, res) => {
    getCategories(req, res);
    insertApiLogs(UserLogsModel, req.user, API);
});

// retrieve a specific category
router.get('/:id', verify, jsonParser, urlEncodedParser, (req, res) => {
    getCategoryById(req, res);
    insertApiLogs(UserLogsModel, req.user, API);
});

module.exports = router;
