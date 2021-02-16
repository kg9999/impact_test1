'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const {verify} = require('../modules/auth');

const {insertApiLogs} = require('../modules/utils');
const { addbook, deleteBook, updateBook, getBooks, getBookById } = require('../controllers/book');

const {bookValidation} = require('../modules/express_validation');

const db = require("../models");
const UserLogsModel = db.user_logs;

const router = express.Router();

const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded({ extended: true });


const API = '/api/book';
// insert a new category with fields: name, description
router.post('/', verify, jsonParser, urlEncodedParser, bookValidation, (req, res) => {
    addbook(req, res);
    insertApiLogs(UserLogsModel, req.user, API);
});

// DELETE - delete a category only if not linked to a book
router.delete('/:id', verify, jsonParser, urlEncodedParser, (req, res) => {
    deleteBook(req, res);
    insertApiLogs(UserLogsModel, req.user, API);
});

// update a category
router.put('/:id', verify, jsonParser, urlEncodedParser, bookValidation, (req, res) => {
    updateBook(req, res);
    insertApiLogs(UserLogsModel, req.user, API);
});

// retrieve categories allowing filtering and paging
router.get('/', verify, jsonParser, urlEncodedParser, (req, res) => {
    getBooks(req, res);
    insertApiLogs(UserLogsModel, req.user, API);;
});

// retrieve a specific category
router.get('/:id', verify, jsonParser, urlEncodedParser, (req, res) => {
    getBookById(req, res);
    insertApiLogs(UserLogsModel, req.user, API);
});

module.exports = router;
