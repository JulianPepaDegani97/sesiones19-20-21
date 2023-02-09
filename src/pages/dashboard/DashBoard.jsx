import { Button } from '@mui/material'
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Copyright from '../../pure/Copyright'

const DashBorad = () => {
  const navigate = useNavigate();
  const logout = () => {
    navigate('/')
  }
  return (
    <div>
        <Button variant="contained" onClick={logout}>Hello World</Button>
        <Copyright />
    </div>
  )
}

export default DashBorad