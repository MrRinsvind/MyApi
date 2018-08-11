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
  size:[
    {
      _id:false,
      amount: {
        type: Number,
        min: 0,
        default: 0,
      },
      type: {
        type: String,
        required: true,
        uppercase: true,
        enum: [ 'XS', 'SM', 'M', 'L', 'XL', 'XXL'],
      }
    }
  ],
  price: {
    type: Number,
    min: [0, 'Price can not be less then 0'],
  },
  description: {
    type: String,
    minlength: 10,
    maxlength: 1000,
  },

})

const Tshirts = mongoose.model('tshirts', tshirtsSchema)

function validateTshirts(tshirts) {
  const schema = Joi.object().keys({
    title: Joi.string().min(3).max(50).required(),
    price: Joi.number().min(0).required(),
    description: Joi.string().min(10).max(1000).required(),
    size: Joi.array().ordered(Joi.object().keys({
      type: Joi.string().valid('XS', 'SM', 'M', 'L', 'XL', 'XXL').uppercase().regex(/^AA|BB$/),
      amount: Joi.number().min(0),
    }))
  });
  return Joi.validate(tshirts, schema, {
    abortEarly: false,
    allowUnknown: true,
  });
}


exports.Tshirts = Tshirts
exports.validate = validateTshirts