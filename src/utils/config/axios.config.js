import axios from 'axios';

export default axios.create(
    {
        baseURL: 'http://randomuser.me/api',
        responseType: 'json',
       
        timeout: 5000,


    }
)