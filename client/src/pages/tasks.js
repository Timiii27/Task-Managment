import React from 'react'
import { toast } from 'react-hot-toast'
import axios from 'axios'
import SelectTask from '../components/selectTask'
import CreateTask from '../components/createTask'
import DeleteTask from '../components/deleteTask'
const tasks = () => {
  const [tasks, setTasks] = React.useState([])
  React.useEffect(() => {
    axios.get('http://localhost:3001/todo', {
      headers: {
        'x-access-token': localStorage.getItem('x-access-token')
      }
    })
      .then(res => {
        setTasks(res.data)
      })
      .catch(err => {
        toast.error(err.response.data.message)
      })
  }, [])
  return (
    <div>

        <div className="corcho p-5 m-4 grid grid-cols-4 flex-1 items-center">
            <CreateTask />
            {tasks.map(task => {
              return task.taskStatus === 'todo' && task.country === localStorage.getItem('user_country')
                ? (
                    <div className=" m-5 task p-5 w-fit h-fit " key={task._id}>
                        <div className="flex flex-col items-center ">
                            <h2 className="title">{task.title}</h2>
                            <p className="desc">{task.description}</p>
                            <p className="date">Created on: {task.createdAt}</p>
                            <p className="date">City Task : {task.country}</p>
                            <p className='status'>{task.taskStatus === 'todo' ? 'Waiting to be selected' : null}</p>
                            <div className="flex w-full ">
                            <button className='select-task' onClick={() => SelectTask(task._id)}>
                                Select Task
                            </button>
                            <button className='select-task' onClick={() => DeleteTask(task._id)}>
                                Delete Task
                            </button>
                            </div>
                        </div>
                    </div>
                  )
                : null
            })}
        </div>

    </div>
  )
}

export default tasks
