const express = require('express');

// desacopla o módulo de rotas do Express em uma variável
const routes = express.Router();

routes.get('/ongs', (request, response) => {
    const data = request.body;

    console.log(data);

    return response.json();
});

// comando do node para disponibilizar variável para o exterior
module.exports = routes;
