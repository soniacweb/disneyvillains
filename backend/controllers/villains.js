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
}

          
//         if (!req.currentUser._id.equals(villain.user)) // this is going ot be the person who created the villain
//         villain.comment.push(req.body) //doesnt change the original array, just updates and thats why we need to save and return it
//         return villain.save()
//       })
//       then.(villain => res.status(201).json({ message: 'Thanks for your comment! Your comment has been sent' })
//       .catch(err => console.log(err))
//     })

 

// SAVE INSTANCE OF Comment MODEL TO DB
//   comment
//     .save()
//     .then(comment => {
//       return Post.findById(req.params.postId);
//     })
//     .then(post => {
//       post.comments.unshift(comment);
//       return post.save();
//     })
//     .then(post => {
//       res.redirect(`/`);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// });

// Export all our functions
module.exports = {
  create,
  index,
  show,
  update,
  remove, 
  comment,
  deleteComment
}
