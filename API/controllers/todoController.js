import Todo from '../models/Task.js'

export const addTodo = async (req, res, next) => {
  try {
    const { title, description, country } = req.body
    const todo = await Todo.create({
      title,
      description,
      country
    })
    res.status(201).json(todo)
  } catch (err) {
    next(err)
  }
}
export const selectTodo = async (req, res, next) => {
  try {
    const { taskStatus } = req.body
    const todo = await Todo.findByIdAndUpdate(req.params.id, {
      taskStatus,
      updatedAt: Date.now(),
      user: req.user
    })
    res.status(200).json(todo)
  } catch (err) {
    next(err)
  }
}
export const completeTodo = async (req, res, next) => {
  try {
    const { taskStatus, rating } = req.body
    const todo = await Todo.findByIdAndUpdate(req.params.id, {
      taskStatus,
      updatedAt: Date.now(),
      rating
    })
    res.status(200).json(todo)
  } catch (err) {
    next(err)
  }
}
export const getTodoUser = async (req, res, next) => {
  try {
    const todo = await Todo.find({ user: req.user._id })

    res.status(200).json(todo)
  } catch (err) {
    next(err)
  }
}
export const getTodos = async (req, res, next) => {
  try {
    const todo = await Todo.find()
    res.status(200).json(todo)
  } catch (err) {
    next(err)
  }
}
export const deleteTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id)
    res.status(200).json(todo)
  } catch (err) {
    next(err)
  }
}
