'use strict';

const logger = require('../modules/logger');
const db = require("../models");
const {getCurrentTime, deleteBookAssoc} = require('../modules/utils');

const { getPagination, getPagingData } = require('../modules/utils');
const { categories } = require('../models');

const Book = db.books;
const Category = db.categories;
const Author = db.authors;
const Op = db.Sequelize.Op;

const _addbook = async (req, res) => {
    try {
        const newBook = req.body;
        console.log(newBook)
        const insBook = await Book.create({
            name: newBook.name,
            isbn_number: newBook.isbn_number,
            year_published: newBook.year_published,
            created_by: req.user.id,
            author_books: [{author_id: newBook.author_id}]
        });

        const sqlAuthBook = 'INSERT INTO author_book (author_id, book_id, createdAt, updatedAt) VALUES (:authors, :books, :date, :date1)';
        const promises = [];
        // add author association information
        for (let i = 0; i < newBook.authors.length; i++) {
            promises.push(db.sequelize.query(sqlAuthBook, {replacements: {
                authors: newBook.authors[i],
                books: insBook.id,
                date: getCurrentTime(),
                date1: getCurrentTime()
            } }));
        }
        //add book association information
        const sqlCatBook = 'INSERT INTO book_category (category_id, book_id, createdAt, updatedAt) VALUES (:categories, :books, :date, :date1)';
        for (let i = 0; i < newBook.categories.length; i++) {
            promises.push(db.sequelize.query(sqlCatBook, {replacements: {
                categories: newBook.categories[i],
                books: insBook.id,
                date: getCurrentTime(),
                date1: getCurrentTime()
            } }));
        }
        const resp = await Promise.all(promises);

        if (insBook) {
            logger.info(`Added new book with name ${newBook.name}`)
            return res.json({success: 1, message: 'Done'});
        }
        // could not insert user. something went wrong
        return res.json({success: 0, message: 'Could not add book. Please try again later.'});
    } catch (err) {
       logger.log('error', err);
       res.json({success: 0, message: err.message}); // this might reveal sensitive server information in production. Probably handle error accordingly by code
    }
}

const _updateBook = async (req, res) => {
    try {
        const bookId = req.params.id || req.query.id;
        const updateBook = await Book.update(
            {
                name: req.body.name,
                isbn_number: req.body.isbn_number,
                year_published: req.body.year_published,
                updated_by: req.user.id
            },
            { where: { id: bookId } }
        );
        await deleteBookAssoc(db, bookId); // dirty way to remove all association. Can be done better
        let promises = [];

        const sqlAuthBook = 'INSERT INTO author_book (author_id, book_id, createdAt, updatedAt) VALUES (:authors, :books, :date, :date1)';
        for (let i = 0; i < req.body.authors.length; i++) {
            promises.push(db.sequelize.query(sqlAuthBook, {replacements: {
                authors: req.body.authors[i],
                books: bookId,
                date: getCurrentTime(),
                date1: getCurrentTime()
            } }));
        }
        const sqlCatBook = 'INSERT INTO book_category (category_id, book_id, createdAt, updatedAt) VALUES (:categories, :books, :date, :date1)';
        for (let i = 0; i < req.body.categories.length; i++) {
            promises.push(db.sequelize.query(sqlCatBook, {replacements: {
                categories: req.body.categories[i],
                books: bookId,
                date: getCurrentTime(),
                date1: getCurrentTime()
            } }));
        }
        await Promise.all(promises); // lets run all at once

        if (updateBook) {
            return res.json({success: 1, message: 'Done'});
        }
        return res.json({success: 0, message: 'Could not update book. Please try again later.'});
    } catch (err) {
        logger.log('error', err);
        res.json({success: 0, message: err.message}); // this might reveal sensitive server information in production. Probably handle error accordingly by code
    }
}

const _deleteBook = async (req, res) => {
    try {
        const bookId = req.params.id || req.query.id;
        await deleteBookAssoc(db, bookId); // remove all references to books
        const deleteBook = await Book.destroy(
            { where: { id: bookId } }
        );
        if (deleteBook) {
            return res.json({ success: 1, message: 'Done' });
        }
        if (deleteBook) {
            return res.json({success: 1, message: 'Done'});
        }
        // could not insert user. something went wrong
        return res.json({success: 0, message: 'Could not delete book. Please try again later.'});
    } catch (err) {
        logger.log('error', err);
        res.json({success: 0, message: err.message}); // this might reveal sensitive server information in production. Probably handle error accordingly by code
    }
}

const _getBooks = async(req, res) => {
    try {
        const page = req.params.page || req.query.page;
        const size = req.params.size || req.query.size;
        const filter = req.params.filter || req.query.filter || '';
        //const { limit, offset } = getPagination(page, size);
        const limits = getPagination(page, size);
        const data = await Book.findAndCountAll({
            distinct: true,
            ...limits, // if no filters provided, add empty object
            where: {
                [Op.or]: {
                    name: {
                        [Op.like]: `%${filter}%`,
                    },
                    isbn_number: {
                        [Op.like]: `%${filter}%`,
                    }
                }
            },
            include: [
               
                {model: Author, as: 'authors'},
                {model: Category, as: 'categories'},
            ]
        });
        const response = getPagingData(data, page, limits.limit); // add information for paging. keeps tract of where we are
        return res.json({ success: 1, message: 'Done', data: JSON.parse(JSON.stringify(response)) });
    } catch (err) {
        logger.log('error', err);
        res.json({success: 0, message: err.message}); // this might reveal sensitive server information in production. Probably handle error accordingly by code
    }
}

const _getBookById = async(req, res, db) => {
    try {
        const bookId = req.params.id || req.query.id;
        const book = await Book.findByPk(bookId, {
            include: [
               
                {model: Author, as: 'authors'},
                {model: Category, as: 'categories'},
            ]
              
        });
        if (book) {
            return res.json({success: 1, message: 'Done', data: JSON.parse(JSON.stringify(book))});
        }
        return res.json({success: 0, message: 'Could not get book. Please try again later.'});
    } catch (err) {
        logger.log('error', err);
        res.json({success: 0, message: err.message}); // this might reveal sensitive server information in production. Probably handle error accordingly by code
    }
}

module.exports = {
    addbook: _addbook,
    deleteBook: _deleteBook,
    updateBook: _updateBook,
    getBooks: _getBooks,
    getBookById: _getBookById
}