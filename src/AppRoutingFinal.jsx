import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useNavigate, createBrowserRouter, RouterProvider
, createRoutesFromElements, redirect, Outlet } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import NotFound from './pages/404/NotFound';
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TaskList from './components/TaskList';
import TaskDetailPage from './pure/TaskDetailPage';
import LoginPage from './pages/auth/LoginPage';
import DashBoard from './pages/dashboard/DashBoard';
import DashBoardPage from './pages/dashboard/DashBoardPage';
import RegisterPage from './pages/auth/RegisterPage';

 const AppRoutingFinal = () => {
  const logged = !true;
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route exact index element={<HomePage/>} />

          <Route path='/login' element={
            logged ? (<Navigate  replace to={'/dashboard'} />) : (<LoginPage/>)
          } />
          <Route path='/register' element={
            logged ? (<Navigate  replace to={'/dashboard'} />) :
           (<RegisterPage/>)} />
    <Route path='/task' element={
            logged ? (<TaskList/>) :
            (<Navigate  replace to={'/login'} />) 
           } />
        <Route path='dashboard' element={
          logged ? (<DashBoard  />)  :
        (<Navigate replace to={'/login'} />)
        }/>

          
      </Route>
    )
  )
  return (
    <div>
      
      <RouterProvider router={router} />
    </div>
    
  )
}
const Root = () => (
  <>
    <div>
      <Link to={'/'}>Home</Link>
      <Link to={'/login'}>Login</Link>
      <Link to={'/register'}>Register</Link>
    </div>
    <Outlet />
  </>
)

export default AppRoutingFinal