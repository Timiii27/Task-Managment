import express from 'express'
import { verify } from '../controllers/verifyController.js'
import {
  addTodo,
  selectTodo,
  getTodoUser,
  getTodos,
  completeTodo,
  deleteTodo
} from '../controllers/todoController.js'
const router = express.Router()

router.get('/', verify, getTodos)
router.get('/:id', verify, getTodoUser)
router.put('/:id', verify, selectTodo)
router.put('/complete/:id', verify, completeTodo)
router.post('/', verify, addTodo)
router.delete('/:id', verify, deleteTodo)

export default router
