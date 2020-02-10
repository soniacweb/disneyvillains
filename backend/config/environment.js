// Global environment variables we need in our server
const port = process.env.port || 8000
const dbURIPrefix = 'mongodb://localhost/'
const dbName = 'disney-villains' //animal-kingdom
const dbURI = `${dbURIPrefix}${dbName}`
const secret = 'This is nick\'s really secret string that he says nobody is going to be able to guess'

module.exports = {
  port,
  dbURI,
  secret
}