const express = require('express')
const restRouter = express.Router()

const tshirtRouter = require('./resources/tshirts/tshirts.restRouter')


restRouter.get('/', (req, res) => {
  console.log('calling to api')
  res.send('valid call to my api')
})

restRouter.use('/tshirts', tshirtRouter)

module.exports = restRouter