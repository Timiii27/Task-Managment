import React from 'react'
import axios from 'axios'
import '../css/tasks.css'
import CompleteTask from '../components/completeTask'
const GetUserTodos = () => {
  const [tasks, setTasks] = React.useState([])
  const id = localStorage.getItem('user_id')

  React.useEffect(() => {
    axios.get('http://localhost:3001/todo/' + id, {
      headers: {
        'x-access-token': localStorage.getItem('x-access-token')
      }
    })
      .then(res => {
        setTasks(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  console.log(tasks)
  return (
    <div>

        <h1 className="text-center font-bold text-5xl p-12">Tasks to be done</h1>

        <div className="corcho grid grid-cols-4 items-center border-4 p-5 m-4 border-black">
            {tasks.map(task => {
              return task.taskStatus === 'inProgress'
                ? (

                    <div className=" m-5 task p-5 w-fit h-fit " key={task._id}>

                        <div className="flex flex-col items-center ">
                        <div className=" chincheta"></div>
                            <h2 className="title">{task.title}</h2>
                            <p className="desc">{task.description}</p>
                            <p className="date">Selected on: {/* formted date */ task.updatedAt}</p>
                            <p className="date">Created on: {/* formted date */ task.createdAt}</p>
                            <p className="status">{task.taskStatus === 'inProgress' ? 'Waiting to be finished' : null}</p>
                            <CompleteTask id={task._id} />

                        </div>
                      </div>

                  )
                : null
            })}

        </div>
        <h1 className=" text-center font-bold text-5xl p-12">Tasks done</h1>
                      <div className="corcho grid grid-cols-4 items-center border-4 p-5 m-4 border-black">
                 {tasks.map(task => {
                   return task.taskStatus === 'done'
                     ? (
                    <div>
                      <div className=" m-5 task p-5 w-fit h-fit " key={task._id}>
                          <div className="flex flex-col items-center ">
                              <div className=" chincheta"></div>
                              <h2 className="title">{task.title}</h2>
                              <p className="desc">{task.description}</p>
                              <p className="date">Ended on: {/* formted date */ task.updatedAt}</p>
                              <p className="date">Created on: {/* formted date */ task.createdAt}</p>
                              <p className="status">{task.taskStatus === 'done' ? 'Task finished' : null} </p>
                              <p className="status">Rating: {task.rating}</p>

                              <p className="status">{task.taskStatus === 'inProgress' ? 'Waiting to be finished' : null}</p>

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

export default GetUserTodos
