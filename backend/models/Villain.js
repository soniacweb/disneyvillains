// We create a model with mongoose by defining a schema, then registering it
// by exporting mongoose.model with a name for our schema.

// Our model is used to validate incoming requests, define what fields are
// required, what types we expect them to be, as well as other restrictions
// on what our data can look like. We can define as many models as we like for
// our application
const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const commentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true // tells you when entry was written
})



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


villainSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Villain', villainSchema)
// module.exports = mongoose.model('Villain', commentSchema)

