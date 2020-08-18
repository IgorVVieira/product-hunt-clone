const Sequelize = require('sequelize');
const database = require('../config/database');

const Product = require('../models/Product');

const connection = new Sequelize(database);

Product.init(connection);

module.exports = connection;