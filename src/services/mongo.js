const mongoose = require('mongoose')
mongoose.connection.once('open', () => {
  console.log('Mongoose connection ready')
})
mongoose.connection.on('error', (err) => {
  console.error(err)
})
async function mongoConnect() {
  console.log('Connecting Mongo Db...')
  await mongoose.connect(
    'mongodb+srv://root:toor@tltm.ozxq4.mongodb.net/tltm?retryWrites=true&w=majority'
  )
}
async function mongoDisconnect() {
  await mongoose.disconnect()
}
module.exports = {
  mongoConnect,
  mongoDisconnect,
}
