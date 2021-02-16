'use strict';

const {getCurrentTime} = require('../modules/utils');
const TABLE = 'category';

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
      description: {
        type: Sequelize.STRING,
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
