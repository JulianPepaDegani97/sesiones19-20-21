import React, { useState, useEffect } from 'react';
import { getAllPagedUsers, getAllUsers, getUserDetails, login } from '../services/fetchService';

const FetchExample = () => {

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);
    const [totalUsers, setTotalUsers] = useState(12);
    const [pages, setPages] = useState(2);
    const [usersPerPage, setUsersPerPage] = useState(6);

    useEffect(() => {
        obtainUsers();
    
      return () => {
        
      }
    }, [])
    
    const obtainUsers = () => {
        getAllUsers().then((response) => {
            console.log(response.data);
            setUsers(response.data);
            setTotalUsers(response.total);
            setUsersPerPage(response.per_page);
            setPages(response.total_pages);
            
        }).catch((err) => alert(err));
    }

    const obtainPagedUsers = (page) => {
        getAllPagedUsers(page).then((response) => {
            console.log(response.data);
            setUsers(response.data);          
        }).catch((err) => alert(err));
    }

    const obtainUserDetails = (id) => {
        getUserDetails(id).then(response => {
            setUser(response.data);
        }).catch(err => alert(err));
    }

    const authUser = () => {
        login('eve.holt@reqres.in', 'cityslicka')
        .then((response) => {
            console.log('TOKEN: ' + response.token);
            sessionStorage.setItem('token', response.token);
            setUser(response.data);          
        }).catch((err) => alert(err));
    }
  return (
    <div>
        <h2>Users</h2>
        {   users &&
            users.map(user => ( 
                <p onClick={() => obtainUserDetails(user.id)} key={user.id}>{user.first_name} {user.last_name}</p>
            ))
        }
        {   user &&
              
                (<div>
                    <p key={user.id}>Fullname: {user.first_name} {user.last_name}</p>
                <p>Email: {user.email}</p>
                <img src={user.avatar} alt={user.name} />
                </div> )
            
        }
        <p>Showing  users of {totalUsers}</p>
        <button onClick={() => obtainPagedUsers(1)}>1</button>
        <button onClick={() => obtainPagedUsers(2)}>2</button>
        <button onClick={authUser}>Fetch user</button>
    </div>
  )
}

export default FetchExample