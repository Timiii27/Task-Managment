
import axios from 'axios'
const ChangeStatus = async (id) => {
  const data = {
    taskStatus: 'inProgress'
  }
  try {
    await axios.put('http://localhost:3001/todo/' + id, data, {
      headers: {
        'x-access-token': localStorage.getItem('x-access-token')
      }
    })
    window.location.reload()
  } catch (error) {
    console.log(error)
  }
}
export default ChangeStatus
