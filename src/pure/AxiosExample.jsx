import React, { useState, useEffect } from 'react';
import { getRandomUser } from '../services/axios-service';

const AxiosExample = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
      
    
      return () => {

      }
    }, [])

    const obtainUser = () => {
        getRandomUser().then(response => {
            if(response.status === 200) {
                console.log(response.data.results[0]);
                setUser(response.data.results[0]);
            }
          })
          .catch((error) => {
            
          })
    }
    
  return (
    <div>
        {user && <p>{user.name.first} {user.name.last}</p>}
        <button onClick={obtainUser}>Get user</button>
    </div>
  )
}

export default AxiosExample