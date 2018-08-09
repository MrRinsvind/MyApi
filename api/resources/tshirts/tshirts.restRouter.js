const express = require('express')
const tshirtsController = require('./tshirts.controller')

const tshirtsRouter = express.Router()


tshirtsRouter.param('id', tshirtsController.findByParam)

tshirtsRouter.route('/')
  .get(tshirtsController.getAll)
  .post(tshirtsController.createOne)


module.exports = tshirtsRouter
