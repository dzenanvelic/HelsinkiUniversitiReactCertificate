const config = require('./utils/config')
const express = require('express')
require('express-async-errors')
const app = express()
const cors = require('cors')
const blogRouter = require('./controllers/blogRoutes')
const userRouter = require('./controllers/userRoutes')
const loginRouter = require('./controllers/loginRoutes')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const mongoose = require('mongoose')

logger.info('connecting to',config.MONGO_DB )

//mongodb
mongoose.connect(config.MONGO_DB,{ useNewUrlParser: true, useUnifiedTopology: true   })
.then(res=>logger.info("Mongo DB connected"))
.catch(err=>logger.error(`Mongo db connection error ${err.message}`))
app.use(middleware.tokenExtractor)
app.use(cors())
app.use(express.json())

app.use(middleware.requestLogger)

app.use('/api/blogs', blogRouter)
app.use('/api/users', userRouter)
app.use('/api/login', loginRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app