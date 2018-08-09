const { generateControllers } = require('./../../modules/query')
const { Tshirts, validate } = require('./tshirts.model')


module.exports = generateControllers(Tshirts, validate)