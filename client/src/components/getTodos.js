
import axios from 'axios'
const ChangeStatus = async (id) => {
  try {
    await axios.get('http://localhost:3001/todo/' + id, {
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
