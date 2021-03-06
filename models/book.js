'use strict';

const TABLE = 'book';

module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define(TABLE, {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
      },
      name: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      isbn_number: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      year_published: {
        type: Sequelize.DATE,
        allowNull:false,
      },
      created_by: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      updated_by: {
        type: Sequelize.INTEGER,
        allowNull: true,
      }
    });
    return Users;
  };