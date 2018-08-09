const { generateControllers } = require('./../../modules/query')
const { Tshirts } = require('./tshirts.model')


module.exports = generateControllers(Tshirts)