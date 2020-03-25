const express = require('express');

// desacopla o módulo de rotas do Express em uma variável
const routes = express.Router();

routes.get('/users', (request, response) => {
    const body = request.body;

    console.log(body);

    return response.json({
        evento: 'Comemoração',
        membro: 'Priscila Ribeiro'
    });
});

// comando do node para disponibilizar variável para o exterior
module.exports = routes;
