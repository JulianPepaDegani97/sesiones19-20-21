import React from 'react'
import { Link } from 'react-router-dom'
import RegisterFormik from '../../pure/form/RegisterFormik'

const RegisterPage = () => {
  return (
    <div>
        <RegisterFormik/>
        <Link from={'/register'} to={'/login'}>Login</Link>
    </div>
  )
}

export default RegisterPage