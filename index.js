const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Привет Илья')
})

app.listen(8888, () => console.log('Listening on port 8888...'))