const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Primer proyecto de Node subido a un repositorio en git!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
