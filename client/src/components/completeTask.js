import React, { useState } from 'react'
import axios from 'axios'
import '../css/tasks.css'
// eslint-disable-next-line react/prop-types
const CompleteTask = ({ id }) => {
  const [data, setData] = useState({
    taskStatus: 'done',
    rating: null
  })
  console.log(id)
  const handleChange = e => {
    const { name, value } = e.target
    setData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  console.log(data)
  const CompleteTask = async e => {
    axios.put('http://localhost:3001/todo/complete/' + id, data,
      {
        headers: {
          'x-access-token': localStorage.getItem('x-access-token')
        }
      })
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
    window.location.reload()
  }

  return (
      <div>
          <form className="flex items-center">

            <select className="p-5" onChange={handleChange} name="taskStatus">
                <option value="">Select Rating</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <button className="select-task" onClick={CompleteTask} type="submit">Finish Task</button>
          </form>
        </div>
  )
}
export default CompleteTask
