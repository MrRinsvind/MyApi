const mongoose = require('mongoose')

const tshirtsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'T-shirt must have a title'],
    trim: true,
    minlength: 3,
    maxlength: 50,
  },
  price: {
    type: Number,
    min: [0, 'Price can not be less then 0'],
  },
  description: {
    type: String,
    minlength: 10,
    maxlength: 1000,
  }
})

const Tshirts = mongoose.model('tshirts', tshirtsSchema)
exports.Tshirts = Tshirts