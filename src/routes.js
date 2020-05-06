const express = require('express');
const routes = express.Router();
const ProductController = require('./controllers/ProductController');

routes.get('/products', ProductController.index);

routes.post('/create', ProductController.store);

module.exports = routes;