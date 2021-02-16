'use strict';

const logger = require('../modules/logger');
const db = require("../models");
const { getPagination, getPagingData } = require('../modules/utils');


const Category = db.categories;
const Op = db.Sequelize.Op;

const _addCategory = async (req, res) => {
    try {
        const newCategory = req.body;
        const newCat = await Category.create({
            name: newCategory.name,
            description: newCategory.description,
            created_by: req.user.id
        });
        if (newCat) {
            logger.info(`Added new category with name ${newCategory.name}`)
            return res.json({ success: 1, message: 'Done', data: newCat.toJSON() });
        }
        // could not insert user. something went wrong
        return res.json({ success: 0, message: 'Could not add category. Please try again later.' });
    } catch (err) {
        console.log(err)
        logger.log('error', err);
        res.json({success: 0, message: err.message}); // this might reveal sensitive server information in production. Probably handle error accordingly by code
    }
}

const _updateCategory = async (req, res, db) => {
    try {
        const categoryId = req.params.id || req.query.id;
        const updateCat = await Category.update(
            {
                name: req.body.name,
                description: req.body.description,
                updated_by: req.user.id
            },
            { where: { id: categoryId } }
        );
        if (updateCat) {
            return res.json({ success: 1, message: 'Done' });
        }
        return res.json({ success: 0, message: 'Could not update category. Please try again later.' });
    } catch (err) {
        logger.log('error', err);
        res.json({success: 0, message: err.message}); // this might reveal sensitive server information in production. Probably handle error accordingly by code
    }
}

const _deleteCategory = async (req, res, db) => {
    try {
        const categoryId = req.params.id || req.query.id;
        const category = await Category.findByPk(categoryId);
        if (!category) {
            return res.json({ success: 0, message: 'Could not delete category. Please try again later.' });
        }
        const isAssoc = await category.hasBooks(parseInt(categoryId));
        if (isAssoc) {
            return res.json({ success: 0, message: 'Could not delete category. Association with a book.' });
        }
        const deleteCat = await Category.destroy(
            { where: { id: categoryId } }
        );
        if (deleteCat) {
            return res.json({ success: 1, message: 'Done' });
        }
        // could not insert user. something went wrong
        return res.json({ success: 0, message: 'Could not delete category. Please try again later.' });
    } catch (err) {
        logger.log('error', err);
        res.json({success: 0, message: err.message}); // this might reveal sensitive server information in production. Probably handle error accordingly by code
    }
}



const _getCategories = async (req, res) => {
    try {
        const page = req.params.page || req.query.page;
        const size = req.params.size || req.query.size;
        const filter = req.params.filter || req.query.filter || '';
        const limits = getPagination(page, size);
        const data = await Category.findAndCountAll({
            ...limits,
            where: {
                [Op.or]: {
                    name: {
                        [Op.like]: `%${filter}%`,
                    },
                    description: {
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

const _getCategoryById = async (req, res) => {
    try {
        const categoryId = req.params.id || req.query.id;
        const cate = await Category.findOne({
            where: {
                id: categoryId
            }
        });
        if (cate) {
            return res.json({ success: 1, message: 'Done', data: cate.toJSON() });
        }
        return res.json({ success: 0, message: 'Could not get category. Please try again later.', data: [] });
    } catch (err) {
        logger.log('error', err);
        res.json({success: 0, message: err.message}); // this might reveal sensitive server information in production. Probably handle error accordingly by code
    }
}

module.exports = {
    addCategory: _addCategory,
    deleteCategory: _deleteCategory,
    updateCategory: _updateCategory,
    getCategories: _getCategories,
    getCategoryById: _getCategoryById
}