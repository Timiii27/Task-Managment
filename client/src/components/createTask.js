import React, { useState } from 'react'
import axios from 'axios'
import '../css/tasks.css'
const CreateTask = () => {
  const [data, setData] = useState([{
    title: '',
    description: '',
    country: ''
  }])

  const handleChange = e => {
    const { name, value } = e.target
    setData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  console.log(data)
  const handelCreateTask = async e => {
    e.preventDefault()
    axios.post('http://localhost:3001/todo', data,
      {
        headers: {
          'x-access-token': localStorage.getItem('x-access-token')
        }
      })
      .then(res => {
        console.log(res)
        window.location.reload()
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
      <div className="flex justify-center items-center" >
          <form className="form flex flex-col items-center justify-center ">
                <h1>Create Task</h1>
            <input onChange={handleChange} type="text" name="title" placeholder="Title" />
            <input onChange={handleChange} type="text" name="description" placeholder="Description" />
            <select onChange={handleChange} name="country">
                <option value="">Select Country</option>
                <option value="Madrid">Madrid</option>
                <option value="Ciudad de Mexico">Ciudad de Mexico</option>
                <option value="Reino Unido">Reino Unido</option>
            </select>
            <button onClick={handelCreateTask} type="submit">Create</button>
          </form>
        </div>
  )
}
export default CreateTask
