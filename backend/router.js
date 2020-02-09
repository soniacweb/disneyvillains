// The router is going to handle all our routing logic, and provide a nice way of adding
// our secure route middleware to routes where you need to be logged in.
const router = require('express').Router() // Create express server/router
const villains = require('./controllers/villains')
const users = require('./controllers/users')
// Secure route is our custom middleware
const secureRoute = require('./lib/secureRoute')

router.route('/villains')
  .get(villains.index)
  .post(secureRoute, villains.create)

router.route('/villains/:id')
  .get(villains.show)
  .put(secureRoute, villains.update)
  .delete(secureRoute, villains.remove)

router.route('/register')
  .post(users.register)

router.route('/login')
  .post(users.login)

router.route('/villains/:id/comments')
  .post(secureRoute, villains.comment)

router.route('/villains/:id/comments/:commentId')
  .delete(secureRoute, villains.deleteComment)

//secureroute= need to log in 
module.exports = router


