const express = require('express')

const tshirtsRouter = express.Router()

tshirtsRouter.get('/', (req, res) => {
    res.send('call to api tshirts')
  })

module.exports = tshirtsRouter
