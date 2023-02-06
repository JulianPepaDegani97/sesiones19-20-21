import React from 'react'
import { useState } from 'react'


const LoginButton = ({loginAction}) => {
    return (
        <button onClick={loginAction}>Login</button>
    )
}
const LogoutButton = ({logoutAction}) => {
    return (
        <button onClick={logoutAction}>Logout</button>
    )
}

const OptionalRender = () => {
    const [access, setAccess] = useState(true);
    const [nMessage, setNMessage] = useState(0);

    const loginAction = () => {
        setAccess(false);
        console.log(access);
    }
    const logoutAction = () => {
        setAccess(true);
        console.log(access);
    }

    let optionalButton;
    
    optionalButton = access ? <LoginButton loginAction={loginAction} /> :
    <LogoutButton logoutAction={logoutAction} />

    let addMessages = () => {
        setNMessage(nMessage + 1);
    } 

  return (
    <div>
        {optionalButton}
        {nMessage > 0 && nMessage == 1 && <p>You have {nMessage} message unread</p>}
        {nMessage > 1 &&   <p>You have {nMessage} messages unread</p>}
        {nMessage == 0 && <p>You have no messages</p>}
        <button onClick={addMessages}>Add task</button>
    </div>
  )
}

export default OptionalRender