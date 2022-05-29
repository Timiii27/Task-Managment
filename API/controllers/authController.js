
import User from '../models/User.js'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
dotenv.config()

export const signup = async (req, res, next) => {
  try {
    const { name, password, country } = req.body
    const user = await User.findOne({ name })
    if (user) {
      res.status(400).json({ message: 'User already exists' })
    } else {
      const newUser = await User.create({
        name,
        password,
        country
      })
      res.status(201).json(newUser)
    }
  } catch (err) {
    next(err)
  }
}
export const signin = async (req, res, next) => {
  try {
    const name = req.body.name
    const password = req.body.password
    console.log(name, password)
    const user = await User.findOne({ name })
    if (user) {
      if (user.password === password) {
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET)
        res.json({ token, user })
      } else {
        res.status(401).json({ message: 'Incorrect password' })
      }
    } else {
      res.status(401).json({ message: 'User does not exist' })
    }
  } catch (err) {
    next(err)
  }
}
