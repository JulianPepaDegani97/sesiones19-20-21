import React, { useState } from 'react'

const LoginForm = () => {
    const initialData =  [{
        user: '',
        name: '',
        email: '',
        password: ''
    }]
    const [data, setData] = useState(initialData);
  return (
    <div>LoginForm</div>
  )
}

export default LoginForm