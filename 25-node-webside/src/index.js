// esto se tomo de la documentacion de npm i express

/*const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)*/


import express from 'express'

const app = express()

app.get('/', function (req, res) { // devolver algo al cliente cuando solicita la pagina
  res.send('<h1>Hello World</h1>') //envio al cliente como html, textos, etc.., esta funcion es de express
})

app.get('/about', function (req, res) { // devolver algo al cliente cuando solicita la pagina
  res.send('<h1>About</h1>') //envio al cliente como html, textos, etc.., esta funcion es de express
})

app.listen(3000)
 console.log('server on port', 3000)
