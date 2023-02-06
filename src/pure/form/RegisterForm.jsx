import React, { useState, useEffect } from 'react'

export const RegisterForm = () => {

    const initialState =  [{
        user: '',
        password: ''
    }]
    const [credentials, setCredentials] = useState(initialState);

  return (
    <div>RegisterForm</div>
  )
}
