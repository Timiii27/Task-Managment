import React from 'react'
import '../css/nav.css'
const Nav = () => {
  const logout = () => {
    localStorage.removeItem('x-access-token')
    localStorage.removeItem('user_id')
    localStorage.removeItem('user_country')
    window.location.href = '/'
  }
  const token = localStorage.getItem('x-access-token')
  return (
    <div>
    <nav className=" w-full bg-slate-900">
        <div className="flex items-center justify-between p-6 ">
            <a href="/tasks">Tasks</a>
            <a href="/myTasks">My Tasks</a>
            {token ? <a href="/" onClick={logout}>Logout</a> : <a href="/">Login</a> }
        </div>
    </nav>
    </div>
  )
}

export default Nav
