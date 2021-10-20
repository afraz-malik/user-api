const express = require('express')
const userRouter = require('./routes/user.route')

const app = express()
app.use(express.json())
app.get('/', (req, res) => res.send('Server is running'))
app.use('/api/user', userRouter)

module.exports = app
