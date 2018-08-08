const express = require('express')
const restRouter = require('../api/restRouter')

module.exports = function(app){
  app.use(express.json())
  app.use('/api', restRouter)
}