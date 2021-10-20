const express = require('express')
const { errorHandler, notFound } = require('./middlewares/errorMiddleware')
const userRouter = require('./routes/user.route')
const dotenv = require('dotenv')
dotenv.config()
const app = express()
app.use(express.json())

app.get('/', (req, res) => res.send('Server is running'))
app.use('/api/user', userRouter)

app.use(notFound)
app.use(errorHandler)

module.exports = app
