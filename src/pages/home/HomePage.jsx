import React from 'react'
import { Link, useLocation, useNavigate, createBrowserRouter } from 'react-router-dom'

const HomePage = () => {
  const location = useLocation();
  const history = createBrowserRouter([{
    path: '/'
  }])
  return (
    <div>
        <h1>Home Page</h1>
        <h2>Dashboard</h2>
        <Link to='/profile'>Profile</Link>
    </div>
  )
}

export default HomePage