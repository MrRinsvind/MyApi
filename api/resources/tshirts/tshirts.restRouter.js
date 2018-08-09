const express = require('express')
const tshirtsController = require('./tshirts.controller')

const tshirtsRouter = express.Router()


tshirtsRouter.param('id', tshirtsController.findByParam)

tshirtsRouter.route('/')
  .get(tshirtsController.getAll)
  .post(tshirtsController.createOne)

tshirtsRouter.route('/:id')
  .get(tshirtsController.getOne)
  .patch(tshirtsController.updateOne)
  .delete(tshirtsController.deleteOne)

module.exports = tshirtsRouter
