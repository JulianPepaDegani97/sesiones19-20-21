import React, { useState } from 'react'
import Child from '../pure/Child'

const Father = () => {

    const [name, setName] = useState('');

    const showMessage = (text) => {
        console.log(`Show message: ${text}`);
    }

    const updateName = (newName) => {
        setName(newName);
    }

  return (
    <div>
        <Child name={name} send={showMessage} update={updateName} />
    </div>
  )
}

export default Father