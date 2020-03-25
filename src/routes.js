const express = require('express');
const crypto = require('crypto');
const connection = require('./database/connection');

// desacopla o módulo de rotas do Express em uma variável
const routes = express.Router();

routes.post('/ongs', async (request, response) => {
    const { name, email, whatsapp, city, uf } = request.body;

    const id = crypto.randomBytes(4).toString('HEX');

    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    });

    return response.json({ id });
});

// comando do node para disponibilizar variável para o exterior
module.exports = routes;
