'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const {verify} = require('../modules/auth');
const { addAuthor, deleteAuthor, updateAuthor, getAuthor, getAuthorById } = require('../controllers/author');
const {insertApiLogs} = require('../modules/utils');

const {AuthorValidation} = require('../modules/express_validation');

const db = require("../models");
const UserLogsModel = db.user_logs;

const router = express.Router();

const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded({ extended: true });

const API = '/api/author';

// insert a new category with fields: first_name,, last_name
router.post('/', verify, jsonParser, urlEncodedParser, AuthorValidation, (req, res) => {
    addAuthor(req, res);
    insertApiLogs(UserLogsModel, req.user, API);
});

// delete an author only if not linked to a book
router.delete('/:id', verify, jsonParser, urlEncodedParser, (req, res) => {
    deleteAuthor(req, res);
    insertApiLogs(UserLogsModel, req.user, API);
});

// update a category
router.put('/:id', verify, jsonParser, urlEncodedParser, AuthorValidation, (req, res) => {
    updateAuthor(req, res);
    insertApiLogs(UserLogsModel, req.user, API);
});

// retrieve categories allowing filtering and paging
router.get('/', verify, jsonParser, urlEncodedParser, (req, res) => {
    getAuthor(req, res);
    insertApiLogs(UserLogsModel, req.user, API);
});

// retrieve a specific category
router.get('/:id', verify, jsonParser, urlEncodedParser, (req, res) => {
    getAuthorById(req, res);
    insertApiLogs(UserLogsModel, req.user, API);
});

module.exports = router;
