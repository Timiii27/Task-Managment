import mongoose from 'mongoose'

const Task = new mongoose.Schema(
  {
    title: String,
    description: String,
    taskStatus: {
      type: String,
      enum: ['todo', 'inProgress', 'done'],
      default: 'todo'
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
      type: Date,
      default: Date.now
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    country: {
      type: String,
      required: false
    },
    rating: {
      type: Number,
      default: 0,
      required: false
    }
  }
)

export default mongoose.model('Task', Task)
