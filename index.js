const express = require('express')
const app = express()

require('./startup/db')()
require('./startup/routes')(app)

app.listen(8888, () => console.log('Listening on port 8888...'))