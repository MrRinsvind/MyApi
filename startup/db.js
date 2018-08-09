const mongoose = require('mongoose')

module.exports = function(){
  mongoose.connect('mongodb://localhost:27017/myapi',  { useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDb'))
}