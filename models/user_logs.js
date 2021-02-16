'use strict';

const {getCurrentTime} = require('../modules/utils');
const TABLE = 'user_logs';

module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define(TABLE, {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      api: {
        type: Sequelize.STRING,
        allowNull:false,
      }
    });
    return Users;
  };
