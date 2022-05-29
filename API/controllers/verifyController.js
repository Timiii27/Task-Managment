import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
export const verify = async (req, res, next) => {
  const token = req.header('x-access-token')
  if (token === null || token === undefined || token === '') {
    res.status(401).json({ message: 'No token provided' })
  } else {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      req.user = decoded
      next()
    } catch (err) {
      res.status(401).json({ message: 'Invalid token' })
    }
  }
}
