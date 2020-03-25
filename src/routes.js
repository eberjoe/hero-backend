const express = require('express');

const OngController = require('./controllers/OngController');

// desacopla o módulo de rotas do Express em uma variável
const routes = express.Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

// comando do node para disponibilizar variável para o exterior
module.exports = routes;
