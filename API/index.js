import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import helmet from 'helmet'
import cors from 'cors'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import auth from './routes/auth.js'
import todo from './routes/todo.js'
const app = express()

dotenv.config()

// database
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO)
    console.log('Connected to MongoDB')
  } catch (err) {
    throw new Error(err)
  }
}
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose default connection disconnected')
})
mongoose.connection.on('connected', () => {
  console.log('Mongoose default connection connected')
})

// middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors({ origin: 'http://localhost:3000' }))
app.use(helmet())
app.use(morgan())

app.get('/', (req, res) => {
  res.send('Hello World')
})

// routes
app.use('/todo', todo)
app.use('/auth', auth)

app.listen(3001, () => {
  connect()
  console.log('Server is running on port ' + process.env.PORT)
})
