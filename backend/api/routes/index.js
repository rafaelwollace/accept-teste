const express = require('express')

const tipos = require('./tiposroute')
const empresas = require('./empresasroute')
const ofertas = require('./ofertasroute')
const lances = require('./lancesroute')


const cors = require('cors');

// gerar documentacao
    // app.use('/', tipos);
    // app.use('/', empresas);
    // app.use('/', ofertas);
    // app.use('/', lances);
   

module.exports = app => {
  app.use(
    cors(),
    express.json(),
    tipos,
    empresas,
    ofertas,
    lances

  )
}