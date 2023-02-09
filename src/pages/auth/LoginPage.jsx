import React from 'react';
import { Link } from 'react-router-dom';
import LoginFormik from '../../pure/form/LoginFormik';

const LoginPage = () => {
  return (
    <div>
        <h1>Login Page</h1>
        <LoginFormik />
        <Link from={'/login'} to={'/register'} >Register</Link>
    </div>
  )
}

export default LoginPage