const express = require('express');

const app = express();
app.use(express.json);

app.get('/', (request, response) => {
    return response.json({
        universidade: 'Universiade do Estado de Santa Catarina',
        curso: 'Tecnologia em Análise e Desenvolvimento de Sistemas'
    });
});

app.listen(3333);