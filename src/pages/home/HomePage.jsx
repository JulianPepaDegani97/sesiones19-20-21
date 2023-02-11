import React from 'react'
import { Link, useLocation, useNavigate, createBrowserRouter } from 'react-router-dom'
import AsyncExample from '../../pure/AsyncExample';
import AxiosExample from '../../pure/AxiosExample';
import ChuckAxios from '../../pure/ChuckAxios';
import FetchExample from '../../pure/FetchExample';
import ObservableExample from '../../pure/ObservableExample';

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
        <ChuckAxios />
    </div>
  )
}

export default HomePage