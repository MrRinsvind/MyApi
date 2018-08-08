const express = require('express')

const restRouter = express.Router()
restRouter.get('/', (req, res) => {
  console.log('calling to api')
  res.send('valid call to my api')
})

module.exports = restRouter