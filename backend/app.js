//run mongod on this document alongside your front end react page
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
// const villains = require('./controllers/villains')
const { dbURI, port } = require('./config/environment')
const router = require('./router')

// connect to mongo with mongoose, to start interacting with our DB in javascript

mongoose.connect(dbURI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  () => console.log('Mongo is connected'))

// Create express server
const app = express()

//Middleware set up
//bodyParser.json returns middleware that only parses json. 
//This parser accepts any Unicode encoding of the body and supports automatic inflation 
//of gzip and deflate encodings. A new body object containing the parsed data is populated 
//on the request object after the middleware (i.e. req.body)
app.use(bodyParser.json())

app.use((req, resp, next) => {
  console.log(`${req.method} to ${req.url}`)
  next() // to get to my routine logic
})

app.use('/api', router)


//***************** This has all been moved and refactored in router.js************
// // Setup our routes. The handler functions our now in /controllers/villains
// app.post('/villains', villains.create)
// app.get('/villains', villains.index) //passing functions to all of my routes
// app.get('/villains/:id', villains.show)
// app.put('/villains/:id', villains.update)
//***********************************************************************************

// Listen on our port!
app.listen(port, () => console.log(`We are good to go on port ${port}`))