'use strict';
const bcrypt = require('bcrypt');
const { getCurrentTime } = require('../modules/utils');
const TABLE = 'users';

module.exports = (sequelize, Sequelize) => {
  const Users = sequelize.define(TABLE, {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    full_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    }
  });
  Users.prototype.validPassword = async function (password) {
    console.log(password, this.password);
    console.log(this)
    return bcrypt.compare(password, this.password);
  }
  return Users;
};
