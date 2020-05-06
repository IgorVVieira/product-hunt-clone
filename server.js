const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Conetando com banco de dados
mongoose.connect('mongodb://localhost:27017/nodeapi', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

requireDir('./src/models');

const express = require('express');
const app = express();
const routes = require('./src/routes');
const port = 3000;

app.use(express.json());
app.use(routes);

app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});