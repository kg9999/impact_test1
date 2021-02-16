'use strict';

const TABLE = 'author';

module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define(TABLE, {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      last_name: {
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
