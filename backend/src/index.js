const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
/*
 criar repositorio github semanaomnistack11 aula 1:36h
 parametros
 query: params filtros paginacao
 route: identificar recursos
 request body: corpo requisicao 

 SQL: SQLite
*/
app.use(routes);

app.listen(3333);