import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Login from './components/login'
import { Toaster } from 'react-hot-toast'
import Tasks from './pages/tasks'
import MyTasks from './pages/myTasks'
import Nav from './components/nav'

export default function App () {
  return (
    <Router>
      <Toaster />
      <Nav/>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/tasks' element={<Tasks />} />
        <Route path='/myTasks' element={<MyTasks />} />
      </Routes>
    </Router>
  )
}
