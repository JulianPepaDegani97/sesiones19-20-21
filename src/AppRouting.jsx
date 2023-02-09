import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Switch, Navigate, useNavigate, createBrowserRouter, RouterProvider
, createRoutesFromElements } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import NotFound from './pages/404/NotFound';
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TaskList from './components/TaskList';
import TaskDetailPage from './pure/TaskDetailPage';
import LoginPage from './pages/auth/LoginPage';

 const AppRouting = () => {
  let logged = true;

  const tasks = [
    {
      id: 4,
      name: 'NDAKND',
      description: 'fsdfsfs'
    },
    {
      id: 5,
      name: 'NDAKNfdsfasdD',
      description: 'fsdfsfs'
    },
    {
      id: 6,
      name: 'sse',
      description: 'fsdfsfs'
    }
  ]

  useEffect(() => {
    logged = localStorage.getItem('credentials');
    console.log(logged);
    return () => {
      
    }
  }, [])

  const router = createBrowserRouter(
      createRoutesFromElements(
        <Route>
        <Route exact path='/' element={<HomePage/>} />
        <Route exact path='/(about|faqs)' element={<AboutPage/>} />
        <Route exact path='/profile' element={<ProfilePage/>} />
         

        <Route exact path='/login' element={<LoginPage/>} />
        <Route exact path='/tasks' element={<TaskList/>} />

        <Route  element={<NotFound/>} />
      </Route>  
      )
    )
  return (

    <RouterProvider router={router} />
    
  )
}
{/*<div>
            <aside>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/faqs'>FAQs</Link>
                <Link to='/login'>Login</Link>
            </aside>
        </div>*/}

export default AppRouting