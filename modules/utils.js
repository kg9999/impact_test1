'use strict';

const moment = require('moment');
const logger = require('./logger');

exports.getCurrentTime = () => {
    return moment().format('YYYY-MM-DD HH:mm:ss');
}

exports.getPagination = (page, size) => {
    let limits = {};
    if (!page && !size) { // if there is no filters, return all rows
        return limits;
    }
    const limit = size ? +size : 10; // lets fetch 10 by default if impact user did not provide
    const offset = page ? page * limit : 0;
    limits = {
        offset: offset,
        limit: limit
    }

    return limits;
};

exports.getPagingData = (data, page, limit = 1) => {
    const { count: totalItems, rows: rows } = data;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit);

    return { totalItems, rows, totalPages, currentPage };
};

exports.deleteBookAssoc = async (db, bookId) => {
    const promises = [];
    const sqlDelAuth = 'DELETE FROM author_book WHERE book_id = :bookid ';
    promises.push(db.sequelize.query(sqlDelAuth, {
        replacements: {
            bookid: bookId,
        }
    }));
    const sqlDelCate = 'DELETE FROM book_category WHERE book_id = :bookid ';
    promises.push(db.sequelize.query(sqlDelCate, {
        replacements: {
            bookid: bookId,
        }
    }));
    return await Promise.all(promises);
}

exports.insertApiLogs = async (UserLogsModel, user, api) => {
    try {
        const userLog = await UserLogsModel.create({
            user_id: user.id,
            api: api
        });
        if (userLog) {
            logger.info(`User ${user.full_name} accessed API ${api}`);
        }
    } catch (err) {
        logger.log('err', err);
    }
}