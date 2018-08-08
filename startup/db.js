const mongoose = require('mongoose')

module.exports = function(){
  mongoose.connect('mongodb://localhost/myapi')
  .then(() => console.log('Connected to MongoDb'))
}