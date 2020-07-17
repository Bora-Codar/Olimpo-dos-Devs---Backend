const express = require('express');
const app = express();
const routes = require('./routes/routes');

//config
app.use('/', routes);
app.use(express.json());

const PORT = 3333;

app.listen(PORT, ()=>{
    console.log(`Servidor Rodando na Porta: ${PORT}`);
})