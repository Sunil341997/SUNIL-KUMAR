const Sequelize = require('sequelizer');
const database = require('./test/database');


  module.exports = (sequelize, Sequelize) => {
    const users = sequelize.define("user", {
          email: {
            type: Sequelize.STRING
          } 
        });
     }

     