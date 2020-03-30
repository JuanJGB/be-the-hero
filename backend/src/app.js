const express = require('express');
const routes = require('./routes');
const { errors } = require('celebrate');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());
/*
 gerar apk expo rockeatseat youtube
 hospedar/deploy: pequena heroku, media digitalOcean
 backend: aws google cloud platform microsoft azure
 frontend: pequena netlify, 

 criardo repositorio github semanaomnistack11 
 parametros
 query: params filtros paginacao
 route: identificar recursos
 request body: corpo requisicao

estudos: padroes de codigo eslint prettier
auth JWT styled components

colocar tudo desenvolvido no github e postar no linkedin

 SQL: SQLite
*/

module.exports = app;