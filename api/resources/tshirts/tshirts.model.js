const mongoose = require('mongoose')
const Joi = require('joi')

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

function validateTshirts(tshirts) {
  const schema = Joi.object().keys({
    title: Joi.string().min(3).max(50).required(),
    price: Joi.number().min(0).required(),
    description: Joi.string().min(10).max(1000).required(),
  });
  return Joi.validate(tshirts, schema, {
    abortEarly: false,
    allowUnknown: true,
  });
}


exports.Tshirts = Tshirts
exports.validate = validateTshirts