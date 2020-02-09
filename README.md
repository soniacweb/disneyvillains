![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) 

<p align="center">
  <img width="630" height="150" src="https://media.giphy.com/media/mEEPs42d1vrO7oT88w/giphy.gif">
</p>

# Disney's Villains -FIRST MERN STACK PROJECT

## Overview

This was a GA homework and side project I was playing around with using the MERN stack. A website that allows users to read up on the history of some of Disney's famous Villains and their origins- a rest API created and built by myself. The user can register and login using user authentication, and submit their own villains- information about other villains and leave comments on articles. The project included authentication and restful API integration.

### For cloning/downloading

### Run the following commands: 

Mongod

Back:
npm run seed
nodemon app.js

Front:
npm run:front

### Preview

The general design is below:

<p align="center">
  <img width="630" height="350" src="https://media.giphy.com/media/eJugokqtvkh2YvGb76/giphy.gif">
</p>


<p align="center">
  <img width="630" height="350" src="https://media.giphy.com/media/KDnGM2QwN9zUBFhJ7b/giphy.gif">
</p>

## Technologies
* HTML5
* CSS3
* Bulma
* JavaScript(ES2019)
* MongoDB & Mongoose
* Express
* React.js
* Node.js
* Babel
* Webpack
* GitHub

### Aim
Build a full-stack application by making my own backend and own front-end. Use an Express API to serve my data from a Mongo database. Consume my API with a separate front-end built with React and Bulma.

# Backend

### Setting up my config:

In my environment.js file, the below config needed to be set up for the global environment variables I needed for the server. The original project was run on port 8000.

``` const port = 8000
const dbURIPrefix = 'mongodb://localhost/'
const dbName = 'disney-villains' 
const dbURI = `${dbURIPrefix}${dbName}`
const secret = 'This is my really secret string that says nobody is going to be able to guess'

module.exports = {
  port,
  dbURI,
  secret
}
```

### User Register/Login and Authentication 

### /Controllers/User.js


```function register(req, res) {
  User
    .create(req.body) // same as creating any other resource, see villains create controller, except runs our extra pre 'save' and 'validate' methods. See /models/User for these.
    .then(() => res.status(200).json({ message: 'Thanks for registering!' })) // if creates succesfully, send a welcome message with users username embedded
    .catch(err => {
      console.log(err)
      res.status(200).json({ message: 'Oops, there was a problem registering account', error: err.message })
    })
}
```

### login route -/login
### user supplies in body of request, email and password only

``` function login(req, res) {
  User
    .findOne({ email: req.body.email }) //find the user by that email
    .then(user => { //check to if we found a record and the password provided matches what is in the database
      if (!user || !user.validatePassword(req.body.password)) {
        return res.status(401).json({ message: 'Unauthorized' }) // send a response of unauthorized and end the process here
      }
      const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '6h' }) // if all good, create a JSON web token (jwt), baking in the user id, a secret to encode/decode and an expiry time for the token
      res.status(202).json({ message: `Welcome Back ${user.username}`, token })
    }) //finally send back a message with that created token
    .catch(() => res.status(401).json({ message: 'Unauthorized' } ))
}
```

#### /Controllers/Villain.js
```
// Controllers contain all our 'handler logic' for our routes. So their
// job is essentially to use our models to perform CRUD operations
// (create, read, update, delete), and then send an appropriate response
// back to the client
//setting a bunch of functions on this page
//defining all the end point on this page 

const Villain = require('../models/Villain')

function create(req, res) {
  req.body.user = req.currentUser
  Villain.create(req.body)
    .then(villain => res.status(201).json(villain))
    .catch(err => console.log(err))
}

function index(req, res) {
  Villain
    .find() //find is a promise just like fetch and axios get, it returns all the documents in the collection
    .populate('user')
    .then(villains => res.status(200).json(villains)) // console.log inside the parenthesis because this is where the response will be for the details form the api.
    //the stuff in the parenthesis is actually Express- rest is mongoose. Then this.JSON sending a JSON response back with the message, which means everything is ok
    .catch(err => console.log(err))
}

function show(req, res) {
  Villain
    .findById(req.params.id)
    .then(villain => {
      console.log('My villains is', villain)
      if (!villain) res.status(404).json({ message: '404 Not found' })
      else res.status(200).json(villain)
    })
    .catch(err => console.log(err))
}

function update(req, res) {
  Villain
    .findById(req.params.id)
    .then(villain => {
      if (!villain) return res.status(404).json({ message: '404 Not found' })
      if (!req.currentUser._id.equals(villain.user)) return res.status(401).json({ message: 'Unauthorized' })
      return villain.set(req.body)
    }) 
    .then(villain => villain.save())
    .then(villain => res.status(202).json(villain))
}

function remove(req, res) {
  Villain
    .findById(req.params.id)
    .then(villain => {
      if (!villain) return res.status(404).json({ message: 'Not Found' })
      return villain.remove()
    })
    .then(() => res.status(200).json({ message: 'Your Disney Villain has been thwarted and deleted' }))
    .catch(err => console.log(err))
}

function comment (req, res) {
  req.body.user = req.currentUser //attaching the user to the comment
  Villain
    .findById(req.params.id) //remember we sent the id through into the route 
    .populate('comment.user') // will return the name and not just the user id. populate takes a reference of an object in mongo and fills that out and replaces it with everything from our schema. Get my villain that i want to comment on
    .then(villain => {
      if (!villain) return res.status(404).json({ message: 'Not Found!!!' })
      villain.comments.push(req.body) //doesnt change the original array, just updates and thats why we need to save and return it
      return villain.save()
    })
    .then(villain => res.status(201).json(villain.comments))
    .catch(err => res.status(404).json({ message: 'Not Found?' }))
}

       
function deleteComment(req, res) {
  Villain
    .findById(req.params.id) //remember we sent the id through into the route 
    .then(villain => {
      if (!villain) return res.status(404).json({ message: 'Not Found' })
      const comment = villain.comments.id(req.params.commentId)
      comment.remove()
      return villain.save()
    })
    .then(villain => res.status(200).json(villain))
    .catch(err => res.json(err))
```
#### Under db/seed.js
### Seeding my database:

```
// This seeds.js is really a self contained program we can run with
// a script we defined in package.json: `npm run seed`

// It's job is to give our db a bunch of data before we start developing
// It connects to mongoose, inserts data, then closes the connection.
const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const Villain = require('../models/Villain')
const User = require('../models/User')

mongoose.connect(
  dbURI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err, db) => {
    if (err) return console.log(err)
    db.dropDatabase()
      .then(() => {
        // Insert data
        return User.create([{
          username: 'Sonia',
          email: 'sonia.choudhury@hotmail.co.uk',
          password: 'jelly',
          passwordConfirmation: 'jelly'
        }])
      })
      .then(users => {
        // Insert data
        console.log(`${'🙍‍♀️'.repeat(users.length)} users created`)
        return Villain.create([
          {
            name: 'Lady Tremaine',
            movie: 'Cinderella',
            year: '1950',
            image: 'https://i.imgur.com/QnXcplH.jpg',
            summary: 'As Cinderella’s Wicked Stepmother, Lady Tremaine, is one of the mildest on the list. She didn’t kill or try to kill Cinderella. She was as a social climber, using her two ugly daughters to try and nab a royal title. Not a nice lady, but not the worst. As for Cinderella’s evil step-sisters; Drusilla and Anastasia are two bumbling, vain nitwits who are minimally useful as sidekicks. She gets some clever help from her wonderfully wickedly minded kitty, Lucifer, who tries to make Cinderella\'s rodent friends lunch. Who names their cat Lucifer? In the end, Lady Tremaine is the brains and brawn of the operation and gets bonus points for taking the lady of the house, Cinderella, and turning her into a slave.',
            video: 'https://youtu.be/_TGwWVt4gss',
            dangerRating: 3,
            user: users[0]
          }
        ]
        )
      })
      .then(villains => console.log(`${villains.length} Villain created`))
      .catch(err => console.log(err))
      .finally(() => mongoose.connection.close())
  }
)
```
### Secure Route

#### lib/secureRoute

```const User = require('../models/User') // to look up a user once the token is decoded
const { secret }  = require('../config/environment') // to help us decode the token, this is the same string it was encoded with
const jwt = require('jsonwebtoken') // the actual jwt library, we need a method from this to read a token

function secureRoute(req, res, next) {
  if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer')) { // checks if our request has a header of authorization or if it does, does the value of authorizaion begin with the string 'Bearer'. If not we send back 401 error and end the process.
    return res.status(401).json({ message: 'Unauthorized' })
  }

  const token = req.headers.authorization.replace('Bearer ', '') //Removing the word Bearer from the string to leave us just the token. Don't forget the space after bearer, not inclusing it will make the token invalid

  jwt.verify(token, secret, (err, payload) => { // using jwt verify method to decode a token, needs the token, the secret used to encode it in the first place, and a call back function to handle error/success of decoding
    if (err) return res.status(401).json({ message: 'Unauthorized' }) // if the error object is defined. send back 401 and end the process
    User // otherwise try and find the user in the DB. We do this using the payload object from the succesfully decoded token. The 'payload.sub' key hold the user id that the token was issued too. To see where this was set check out '/controllers/user login route'.
      .findById(payload.sub) // finding that user
      .then(user => {
        if (!user) return res.status(401).json({ message: 'Unauthorized' }) // if that user returns as null, send 401 kick the user out
        req.currentUser = user
        next() // if everything was good and we found a user, call next to allow the request to pass on through to the controller
      })
      .catch(() => res.status(401).json({ message: 'Unauthorized' })) // any other error kick the suer out
  })

}

module.exports = secureRoute
```

### Schema

#### models/Villains.js:

I created a model with mongoose by defining a schema, then registering it by exporting mongoose.model with a name for my schema.
My model is used to validate incoming requests, define what fields are required, what types we expect them to be, as well as other restrictions on what our data can look like. We can define as many models as I like for my application.

```
const villainSchema = new mongoose.Schema({
  name: { type: String, required: true },
  movie: { type: String, required: true },
  year: { type: Number, required: true },
  image: { type: String, required: true },
  summary: { type: String, required: true },
  // magical: { type: String, required: true },
  dangerRating: { type: Number, required: true, min: 1, max: 5 },
  habitats: { type: [String] },
  video: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  comments: [commentSchema]
}, {
  timestamps: true // tells you when entry was written
})
```

# Frontend

## React/Bulma

File structure: 

<p>
  <img width="150" height="250" src="https://i.imgur.com/e3HA3zd.png">
</p>

Styling and design predominantly using Bulma, with unique SCSS style used. I used Bulma forms for the registration, signing in and the 'new villains' forms which made building the frontend really easy.


- Very similar to register again. A form with some data that we track
- with state, and then post to the right endpoint at the end.
- This time we navigate to the wine we just created (we get the id)
- back in the response from the API

```
class NewVillains extends React.Component {

  constructor() {
    super()
    this.state = {
      data: {
        name: '',
        movie: '',
        year: '',
        image: '',
        summary: ''
        // dangerRating: ''
      },
      errors: {}
    }
  }

  handleChange(e) {
    // Keep all the previous data, except the field we just modified
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    // Keep all the previous errors, but remove the one for the field we just updated
    const errors = { ...this.state.errors, [e.target.name]: '' }
    this.setState({ data, errors })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('/api/villains', this.state.data, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(resp => this.props.history.push(`/villains/${resp.data._id}`))
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }

  render() {
    return <section className="section">
      <div className="container">
        < VillainForm
          handleSubmit={e => this.handleSubmit(e)}
          handleChange={e => this.handleChange(e)}
          errors={this.state.errors}
          data={this.state.data}
        />
      </div>
    </section>
  }
}
```
## Posting your own information as a user.

I used bulma field, label and control classes for nice forms.

const VillainForm = ({ data, handleSubmit, handleChange, errors }) => (
  
  ```
  <form action="" className="section-form hero is-fullheight" onSubmit={handleSubmit}>
    <div className="container"> 
      <div className="field">
        <div className="title">Submit Your Villain</div>
        <label htmlFor="" className="label">
        Name
        </label>
        <div className="control">
          <input
            onChange={handleChange}
            type="text"
            name="name"
            className="input"
            value={data.name}
          />
        </div>
        {errors.name && <small className="help is-danger">
          {errors.name}
        </small>}
      </div>
   
      <div className="villainform field">
        <label htmlFor="" className="label">
        Image
        </label>
        <div className="control">
          <input
            onChange={handleChange}
            type="text"
            name="image"
            className="input"
            value={data.image}
          />
        </div>
        {errors.image && <small className="help is-danger">
          {errors.image}
        </small>}
      </div>

      <div className="field">
        <label htmlFor="" className="label">
        Movie
        </label>
        <div className="control">
          <input
            onChange={handleChange}
            type="text"
            name="movie"
            className="input"
            value={data.movie}
          />
        </div>
        {errors.movie && <small className="help is-danger">
          {errors.movie}
        </small>}
      </div>

      <div className="field">
        <label htmlFor="" className="label">
        Who are they? 
        </label>
        <div className="control">
          <input
            onChange={handleChange}
            type="text"
            name="summary"
            className="input"
            value={data.summary}
          />
        </div>
        {errors.summary && <small className="help is-danger">
          {errors.summary}
        </small>}
      </div>


      <button className="button is-black">
      Create Villain
      </button>
    </div>
  </form>
)
```

## Challenges
- I found authentication, and JWT webtokens quite a tricky concept to wrap my head around initially, however I enjoyed setting this up to better understand basic security checks on apps. 

## Modifications:
- I could build on this concept, and play around with responsive web design making it friendly for other devices.
- I would like to add videos and trailers under the 'single' pages for the villains and display them on the frontend using react modal.  

