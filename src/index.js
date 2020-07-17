const express = require('express');
const app = express();
const routes = require('./routes/routes');

//config
app.use('/', routes);
app.use(express.json());

require('dotenv').config({ path: 'variables.env' });

const PORT = process.env.PORT || 3333;

app.listen(PORT, ()=>{
    console.log(`Servidor Rodando na Porta: ${PORT}`);
})