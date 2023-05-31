import React from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import '../css/login.css'
const Login = () => {
  const [loginName, setName] = React.useState('')
  const [loginPassword, setPassword] = React.useState('')
  const handleAuthSignin = async (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/auth/signin', {
      name: loginName,
      password: loginPassword
    })
      .then(res => {
        localStorage.setItem('x-access-token', res.data.token)
        localStorage.setItem('user_id', res.data.user._id)
        localStorage.setItem('user_country', res.data.user.country)
        window.location.href = '/myTasks'
      })
      .catch(err => {
        toast.error(err.response.data.message)
      })
  }

  return (
    <div>
        <div className="h-screen flex flex-col items.center justify-center" >
            <form className="form-login w-fit h-fit shadow-xl container m-auto flex flex-col  p-5">
                <h1>Login Form</h1>
                <input className="border-4 m-4 p-2 text-black" type="text" value={loginName} placeholder="name" onChange={(e) => setName(e.target.value)} />
                <input className="border-4 m-4 p-2  text-black" type="password" value={loginPassword} placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                <button className="btn" onClick={handleAuthSignin}>Signin</button>
            </form>
        </div>
    </div>
  )
}

export default Login
