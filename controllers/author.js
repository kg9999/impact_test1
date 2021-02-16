'use strict';

const logger = require('../modules/logger');
const db = require("../models");

const { getPagination, getPagingData } = require('../modules/utils');

const Author = db.authors;
const Op = db.Sequelize.Op;

// add author
const _addAuthor = async (req, res) => {
    try {
        const newAuthor = req.body;
        const newAuth = await Author.create({
            first_name: newAuthor.first_name,
            last_name: newAuthor.last_name,
            created_by: req.user.id
        });
        if (newAuth) {
            logger.info(`Added new author with name ${newAuthor.first_name}`)
            return res.json({success: 1, message: 'Done', data: newAuth.toJSON()});
        }
        // could not insert author. something went wrong
        return res.json({success: 0, message: 'Could not add author. Please try again later.'});
    } catch (err) {
        logger.log('error', err);
        res.json({success: 0, message: err.message}); // this might reveal sensitive server information in production. Probably handle error accordingly by code
    }
}

const _updateAuthor = async (req, res, db) => {
    try {
        const authorId = req.params.id || req.query.id;
        const updateCat = await Author.update(
            {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                updated_by: req.user.id
            },
            { where: { id: authorId } }
        );
        if (updateCat) {
            return res.json({success: 1, message: 'Done'});
        }
        return res.json({success: 0, message: 'Could not update author. Please try again later.'});
    } catch (err) {
        logger.log('error', err);
        res.json({success: 0, message: err.message}); // this might reveal sensitive server information in production. Probably handle error accordingly by code
    }
}

const _deleteAuthor = async (req, res, db) => {
    
    try {
        const authorId = req.params.id || req.query.id;
        const author = await Author.findByPk(authorId);
        if (!author) {
            return res.json({ success: 0, message: 'Could not delete author. Please try again later.' });
        }
        const isAssoc = await author.hasBooks(parseInt(authorId));
        if (isAssoc) {
            return res.json({ success: 0, message: 'Could not delete author. Association with a book.' });
        }
        const deleteAuth = await Author.destroy(
            { where: { id: authorId } }
        );
        if (deleteAuth) {
            return res.json({success: 1, message: 'Done'});
        }
        // could not insert user. something went wrong
        return res.json({success: 0, message: 'Could not delete author. Please try again later.'});
    } catch (err) {
        logger.log('error', err);
        res.json({success: 0, message: err.message}); // this might reveal sensitive server information in production. Probably handle error accordingly by code
    }
}

const _getAuthor = async(req, res) => {
    try {
        const page = req.params.page || req.query.page;
        const size = req.params.size || req.query.size;
        const filter = req.params.filter || req.query.filter || ''; // if no filter provided, empty string will retrive all
        const limits = getPagination(page, size);
        // const { limit, offset } = getPagination(page, size);
        const data = await Author.findAndCountAll({
            ...limits,
            where: {
                [Op.or]: {
                    first_name: {
                        [Op.like]: `%${filter}%`,
                    },
                    last_name: {
                        [Op.like]: `%${filter}%`,
                    }
                }
            },
        });
        const response = getPagingData(data, page, limits.limit);
        return res.json({ success: 1, message: 'Done', data: response });
    } catch (err) {
        logger.log('error', err);
        res.json({success: 0, message: err.message}); // this might reveal sensitive server information in production. Probably handle error accordingly by code
    }
}

const _getAuthorById = async(req, res, db) => {
    try {
        const authorId = req.params.id || req.query.id;
        const author = await Author.findOne({
            where: {
                id: authorId
            }
        });
        if (author) {
            return res.json({success: 1, message: 'Done', data: author.toJSON()});
        }
        return res.json({success: 0, message: 'Could not get author. Please try again later.'});
    } catch (err) {
        logger.log('error', err);
        res.json({success: 0, message: err.message}); // this might reveal sensitive server information in production. Probably handle error accordingly by code
    }
}

module.exports = {
    addAuthor: _addAuthor,
    deleteAuthor: _deleteAuthor,
    updateAuthor: _updateAuthor,
    getAuthor: _getAuthor,
    getAuthorById: _getAuthorById
}