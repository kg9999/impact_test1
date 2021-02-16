'use strict';

const Sequelize = require("sequelize");
const configs = require('../configs/config');


const sequelize = new Sequelize(configs.db.database, configs.db.user, configs.db.pass, {
    logging: false,
    host: configs.db.host,
    dialect: configs.db.dialect,
    operatorsAliases: configs.db.operatoralias,
    pool: {
        max: configs.db.pool_max,
        min: configs.db.pool_min,
        acquire: configs.db.pool_acquire,
        idle: configs.db.pool_idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// reference to user model
db.users = require("./user")(sequelize, Sequelize);

// // reference to author model
db.authors = require("./author")(sequelize, Sequelize);

// reference to category model
db.categories = require("./category")(sequelize, Sequelize);
// // reference to book model
db.books = require("./book")(sequelize, Sequelize);

//reference to user logs
db.user_logs = require("./user_logs")(sequelize, Sequelize);


// many-many relationship of author and book
db.authors.belongsToMany(db.books, {
    through: "author_book",
    as: "books",
    foreignKey: "author_id",
});

db.books.belongsToMany(db.authors, {
    through: "author_book",
    as: "authors",
    foreignKey: "book_id",
});

// many-many relationship of category and book
db.categories.belongsToMany(db.books, {
    onDelete: 'RESTRICT',
    through: "book_category",
    as: "books",
    foreignKey: "category_id",
});

db.books.belongsToMany(db.categories, {
    through: "book_category",
    as: "categories",
    foreignKey: "book_id",
});



module.exports = db;