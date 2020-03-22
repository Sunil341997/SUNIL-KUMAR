'use strict';

const Sequelize = require('sequelize');
const db = require('./read')

const seq = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    idkey: DataTypes.INTEGER,
    name: DataTypes.STRING,
    dob: DataTypes.STRING,
    address: DataTypes.STRING,
  }, {});
  users.associate = function(models) {
    // associations can be defined here
  };
  module.exports = users;
};
